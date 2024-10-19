import React, { useEffect, useRef, useState } from "react"

import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import ImageTool from "@editorjs/image"
import LinkTool from "@editorjs/link"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"

import Navbar from "@/components/layout/header/Navbar"
import Container from "@/components/ui/Container"

import CustomButton from "../Setting/Components/CustomBtn"
import { useForm, Controller } from "react-hook-form";
import { createUpdateBlog } from "@/lib/api/Blog"
import useChooseImageModal from "@/hooks/useBlogModel"
import UploadModal from "@/components/ui/createBlog/components/UploadModal"
import { uploadImage } from "@/lib/api/Image"
import toast from "react-hot-toast"

interface FormData {
  title: string;
  content: any;
}
interface Image {
  id: number;
  imageUrl: string;
  thumbnailUrl: string;
}

const Editor: React.FC = () => {
  const chooseImageModal = useChooseImageModal();
  const editorInstance = useRef<EditorJS | null>(null)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  const [editorContent, setEditorContent] = useState<any>(null)
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);


  useEffect(() => {
    const initializeEditor = () => {
      if (!editorInstance.current) {
        editorInstance.current = new EditorJS({
          holder: "editorjs", 
          placeholder: "Nội dung bài viết...",
          tools: {
            header: Header as any,
            list: List as any,
            image: {
              class: ImageTool as any,
              config: {
                buttonContent: "Chọn ảnh từ kho của tôi ",
                captionPlaceholder: "Miêu tả hình ảnh",
              },
            },
            quote: {
              class: Quote as any,
              inlineToolbar: true,
              config: {
                quotePlaceholder: "Câu trích dẫn của bạn",
                captionPlaceholder: "Miêu tả",
              },
            },
            linkTool: LinkTool as any,
          },
          onChange: async () => {
            const content = await editorInstance.current?.save();
            setEditorContent(content); 
            console.log(content)
          },
        });
      }
    };

    initializeEditor();

    return () => {
      // Proper cleanup
      if (
        editorInstance.current &&
        typeof editorInstance.current.destroy === "function"
      ) {
        editorInstance.current.destroy()
        editorInstance.current = null
      }
    }
  }, [])


  // Handle image selection and upload
  const handleImageSelection = async (files: FileList) => {
    try {
      if (files.length > 0) {
        const file = files[0];
        const imageId = await uploadImage(file);
        const imageUrl = URL.createObjectURL(file);  
        setSelectedImages((prev) => [...prev, { id: imageId, imageUrl, thumbnailUrl: imageUrl }]);
        
        // Insert the uploaded image into EditorJS
        editorInstance.current?.blocks.insert("image", {
          file: {
            url: imageUrl,  // You might replace this with the actual URL from your backend response
          },
          caption: "",
          withBorder: false,
          withBackground: false,
          stretched: false,
        });
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };
  const transformEditorContentToText = (content: any): string => {
    return content.blocks.map((block: any) => {
      if (block.type === "paragraph") {
        return block.data.text; // Return paragraph text
      }
      if (block.type === "image") {
        return `${block.data.caption}`;
      }
      return "";
    }).join("\n"); 
  };

   // Form submission handler
   const onSubmit = async (data: FormData) => {
    try {
      const transformedContent = transformEditorContentToText(editorContent);
      console.log(transformedContent)
      const imageIds = selectedImages.map((image) => image.id); 
      console.log(imageIds)
      const response = await createUpdateBlog({
        id: 0, 
        title: data.title,
        content: transformedContent, 
        imageIds: imageIds 
        
      });
      console.log("title:", data.title),

      console.log("Blog created/updated successfully", response);
      toast.success("Blog đã được tạo thành công !!")
    } catch (error) {
      console.error("Error creating/updating blog", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-20 w-full">
            <div
              id="editorjs"
              className="border h-full rounded-xl bg-transparent p-5 flex flex-col justify-center"
            >
              <input
                {...register("title", { required: true })}
                className="mb-4 text-3xl font-bold text-center placeholder-gray-400 focus:outline-none"
                placeholder="Tiêu đề bài viết......."
              />
              {errors.title && <p className="text-red-500">Title is required</p>}
            </div>

             {/* Button to trigger file input for image upload */}
             <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  handleImageSelection(e.target.files);  // Pass selected files to handleImageSelection
                }
              }}
            />
            
            <div className="fixed bottom-2 left-[50%] z-10 flex translate-x-[-4rem] justify-center gap-3">
              <CustomButton label="Lưu nháp" onClick={() => {}} />
              <CustomButton label="Tiếp tục" onClick={handleSubmit(onSubmit)} />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Editor
