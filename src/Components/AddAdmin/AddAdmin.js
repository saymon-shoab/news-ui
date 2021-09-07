import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { UserContext } from '../../App';
import toast, { Toaster } from 'react-hot-toast';
import './AddAdmin.css'
const AddAdmin = () => {


    // const { loggedInUser: { email } } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
      
      
        const loading = toast.loading('Adding...Please wait!');
        axios.post('http://localhost:5000/addAdmin', data)
            .then(res => {
                toast.dismiss(loading);
                if (res) {
                    return swal("Successfully Added", "success" , { successMode: true });
                }
               
            })
            .catch(error => {
                toast.dismiss(loading);
                if(error){
                    swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                }
               
            });
    }

    return (
        <section className="make-admin">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5 mx-md-5 mt-5 bg-white form-main d-flex justify-content-center">
                    <div className="py-md-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Row>
                            <Form.Group as={Col} xs="auto" style={{ width: '25rem' }} >
                                <Form.Control
                                    type="text"
                                    {...register("email", { required: true })}
                                    placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group as={Col} xs="auto">
                                <Button type="submit" className="btn-main">Add</Button>
                            </Form.Group>
                        </Form.Row>
                    </div>
                </div>
            </Form>
            <Toaster />
        </section>
    );
};

export default AddAdmin;