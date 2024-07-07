const TextBlock = ({title,subtitle,text}) => {
  return (
    <div className="p-5 ">
      {title && <h1 className="text-2xl mb-2">{title}</h1>}
      {subtitle && <h2 className='text-xl mb-1 text-gray-600'>{subtitle}</h2>}
      {text && <p className="text-base text-gray-700"></p>}
    </div>
  )
    

}
export default TextBlock;