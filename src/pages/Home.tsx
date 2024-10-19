import FengShui from "@/components/local/default/FengShui"
import HomeHero from "@/components/local/default/HomeHero"
import CreateBlog from "@/components/ui/createBlog/CreateBlog"

function Home() {
  return (
    <div>
      <>
        <HomeHero />
        <div className="px-20">
          <FengShui />
        </div>
        <CreateBlog onClick={()=>{}}/>
      </>
    </div>
  )
}
export default Home
