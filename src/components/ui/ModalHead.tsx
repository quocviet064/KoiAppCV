
interface HeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const Heading = ({ title, subtitle, center = false }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-semibold text-sm mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
