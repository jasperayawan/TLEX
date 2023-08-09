
export default function Modal({ openModal, setOpenModal }){
    return(
        <>
            {openModal && (
                <div className="w-full h-screen absolute top-0 left-0">
                   <div className="flex justify-center items-center h-screen flex-col">
                   yoww
                    <button 
                        onClick={() => setOpenModal(false)}
                        className="bg-black text-white px-4 rounded-md py-2">close modal</button>
                   </div>
                </div>
            )}
        </>
    )
}