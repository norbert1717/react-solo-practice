import Paragraph from './Paragraph';

function Page({ data }) {
  return (
    <div className="page">
      {data.map((text, index) => (
        <Paragraph key={index} index={index} text={text} />
      ))}
    </div>
  );
}

export default Page;