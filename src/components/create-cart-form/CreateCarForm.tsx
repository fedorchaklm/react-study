export const CreateCartForm = () => {
    return (
        <div className='flex flex-col items-center border-blue-800 border-2 w-96 mx-auto my-5'>
            <h2 className='text-3xl'>Create a new car</h2>
            <form className='flex flex-col items-center gap-5 my-5'>
                <label htmlFor='brand'>Enter brand of car</label>
                <input className='border-blue-800 border-2' id='brand' type='text'/>
                <label htmlFor='year'>Enter year of car</label>
                <input className='border-blue-800 border-2' id='year' type='number'/>
                <label htmlFor='price'>Enter price of car</label>
                <input className='border-blue-800 border-2' id='price' type='number'/>
                <button className='text-2xl bg-black text-white px-2 rounded' type='submit'>create</button>
            </form>

        </div>
    )
}