

const SectionTitle = ({ title, sub, sup }) => {

  return (
    <div className="p-5">
      {sup && <p className="text-xs uppercase tracking-wider text-gray-700">{sup}</p>}
      {
        title && <h1 className={`text-3xl tracking-wide font-bold ${sub ?? 'mb-2'}`}>{title}</h1>
      }
      {sub && <p className='text-md mb-4 text-gray-400'>{sub}</p>}
    </div>
  );
};

export default SectionTitle;