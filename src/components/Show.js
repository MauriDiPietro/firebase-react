import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {doc, collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)

const Show = () => {

const [products, setProducts] = useState([]);

const productsCollection = collection(db, 'products');

const getProducts = async() =>{
    const data = await getDocs(productsCollection)
    // console.log(data)
    setProducts(
        // data.docs.map((doc)=>({...doc._document.data.value.mapValue.fields, id: doc.id}))
        data.docs.map((doc)=>({...doc.data(), id: doc.id}))
    )
    console.log(products)
}

const deleteProduct = async(id)=>{
    const productDoc = doc(db, 'products', id)
    await deleteDoc(productDoc)
    getProducts()
}

useEffect(() => {
  getProducts()
}, []) 


  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <Link to='/create' className='btn btn-secondary mt-2 mb-2' >Create</Link>
                    </div>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map((prod)=>(
                                <tr key={prod.id}>
                                    <td> {prod.description} </td>
                                    <td> {prod.stock} </td>
                                    <td>
                                        <Link to={`/edit/${prod.id}`} className='btn btn-light' >Edit</Link>
                                        <button onClick={()=> deleteProduct(prod.id)} className='btn btn-danger' >Delete</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Show