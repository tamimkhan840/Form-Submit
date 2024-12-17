import { useForm } from "react-hook-form"


function Form({onfandledat,}) {
   const {register, handleSubmit, reset} = useForm()
   const handleadddata = (data) => {
    onfandledat(data);
    reset();
   }
  return (
    <div className="my-12 flex gap-10 justify-center">
        <form className="flex gap-10" onSubmit={handleSubmit(handleadddata)}>
            <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="name" required/>
            <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="email" required/>
            <input {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="image url" required/>
            <input  className="px-2 py-1 rounded-md bg-blue-400 text-white font-semibold" type="submit" />
        </form>
    </div>
  )
}

export default Form
