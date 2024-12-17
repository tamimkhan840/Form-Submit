

export default function Card({onItem, id, onRemove}) {
   

  return (
    <div className="w-40 h-full bg-white rounded-lg flex flex-col  items-center p-2 overflow-hidden">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-blue-500 overflow-hidden">
            <img className="w-full h-full object-cover" src={onItem.image} alt="" />
        </div>
        <h2 className="text-xl font-semibold text-center ">{onItem.name}</h2>
        <h4 className="text-red-500 opacity-70 text-xs break-words text-center my-2">{onItem.email}</h4>
        {/* <p className="text-center text-xs font-semibold tracking-tight my-2">Lorem ipsum dolor sit amat consectetur.</p> */}
        <button onClick={() =>onRemove(id)} className="py-1 px-3 bg-red-500 text-xs rounded-lg font-semibold text-white">Remove </button>
    </div>
  )
}
