import Modal from 'react-modal'


export default function AddInventory({isOpen,onClose}){
    return(
        <div>
            <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Agregar Inventario" style={{overlay:{backgroundColor:'rgba(0,0,0,0.5)'},content:{width:'fit-content',height:'fit-content',margin:'auto',borderRadius:'8px',padding:'40px',backgroundColor:'white',display:'flex',flexDirection:'column'}}}>
                <section><h1>Mi primer Modal</h1></section>
            </Modal>
        </div>
    )
}