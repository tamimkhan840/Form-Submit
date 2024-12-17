import Card from "./Card"


function Cards({onUsers, onRemove}) {
  return (
    <div className="w-full max-h-[30vw] p-4 flex flex-wrap justify-center gap-3 overflow-y-scroll">
        {
            onUsers && onUsers.map((item, index) => <Card key={index} onItem={item} id={index} onRemove={onRemove}/>)
        }


    </div>
  )
}

export default Cards
