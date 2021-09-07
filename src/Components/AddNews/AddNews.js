import React, { useState } from 'react';
import swal from 'sweetalert';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from 'axios';
const AddNews = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState("")
    const handleImageUplode = event => {
         console.log(event.target.files[0])
         const imageData = new FormData();
         imageData.set('key' , 'c0f555bad6f04d680997691c68073e10');
         imageData.append('image', event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload', imageData)
          .then( response => {
            setImageUrl(response.data.data.display_url);
          })
          .catch( error => {
            console.log(error);
          });
    }



    const onSubmit = data => {
        const newsInfo = {
            newsTitle : data.title,
            newsAuthor : data.author,
            newsCategory: data.category,
            newsImage: imageUrl,
            newsDescription: data.description
        }
        if(!imageUrl){
            return swal("image is uplodeing...", "please wait some seconds", "info")
        }
        
        axios.post('https://blooming-headland-99659.herokuapp.com/addNews', newsInfo )
        .then(response => response &&  alert("Successfully Added", "Your product is successfully added!", "success"))
        .then(err => console.log(err));
    
    }
    return (
        <div>
             <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-5 mx-md-5 mt-5 bg-white" style={{ borderRadius: "15px" }}>
                <div className="row">
                    <div className="col-md-6">
                        <label style={{fontWeight:'bold',fontSize:'1.5rem'}} for="">Title</label>
                        <input className=" form-control" {...register("title")} name="title"  placeholder="Enter title"/>
                    </div>
                    <div className="col-md-6">
                        <label style={{fontWeight:'bold',fontSize:'1.5rem'}} for=""> Author</label>
                        <input className=" form-control" {...register("author")} name="author" placeholder="Enter author" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label style={{fontWeight:'bold',fontSize:'1.5rem'}} for="">news Category</label>
                        <input className=" form-control" {...register("category")} name='category' placeholder="Enter category"/>
                    </div>
                    
                    <div className="col-md-6">
                        <label style={{fontWeight:'bold',fontSize:'1.5rem'}} for="">Uplode Pictuce</label>
                        <Button
                                    as={"label"}
                                    htmlFor="upload"
                                    variant="outline-info"
                                    className="d-block px-3 upload-btn">
                                    <AiOutlineCloudUpload style={{ fontSize: "1.5rem" }} /> Upload Photo
                                </Button>
                        <input className="form-control" onChange={handleImageUplode} hidden="hidden" id="upload"  name="photo" type="file"   placeholder="Upload photo"  />
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12 form-group">
                        <label style={{fontWeight:'bold',fontSize:'1.5rem'}} for=""> Description</label>
                        <input style={{height:'80px'}} className=" form-control" {...register("description")} name='description' placeholder="Enter Description"/>
                    </div>
                 </div>   
            </div>
            <div style={{marginLeft:'620px'}} className="text-left  ">
            <input className="shadow-none btn btn-info" type="submit" name="" value="save"/>
            </div>
               
        </Form>
        </div>
    );
};

export default AddNews;