
    import styles from "../styles/Payment.module.scss"
    import Resturent from "./resturent.json"
    // import { useForm } from 'react-hook-form';
    import { useState } from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

    const Payment = () => {

        // const {name,setName} = useState("");
        // const {number,setNumber} = useState("");

        // const handleParam = () => (e) => {
        //     const name = e.target.name;
        //     const value = e.target.value;
        //     setForm((prevState) => ({
        //       ...prevState,
        //       [name]: value
        //     }));
        //   };
            

            // setForm((state) => ({
            //     ...state,
            //     [name] : value
            // }))
        

        // const formSubmit = (e) => {
        //     e.preventDefault();
         
        //     };

        const showData = () => { 
            alert('Customer Name : ' + query.name +
            ' Customer Mobile No : '+ query.number);
            
            // console.log ('Form : ', query)

            // alert('Customer Name : '+  d.friestName  +
            // ' Customer Mobile No : '+ d.number)
        }

        // const handleSubmit = async (e) =>{
        //     e.preventDefault();
        // }

        // const data =(d) =>{
        //     alert('Customer Name : '+  d.name  +
        //     ' Customer Mobile No : '+ d.email)
        // }

        const [query, setQuery] = useState({
            name: "",
            number: ""
          });
          
          // Update inputs value
          const handleParam = () => (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setQuery((prevState) => ({
              ...prevState,
              [name]: value
            }));
          };
          // Form Submit function
          const formSubmit = (e) => {
            e.preventDefault();
            
          };








        // const [name, setName] = useState("");
        // const [number, setNumber] = useState("");

        // const updateName = (event) => {
        //     setName(event.target.value);
    

        // };

        // const updateNames = (event) => {
        //     setNumber(event.target.value);
    

        // };

        // console.log(name);
        // console.log(number);




        return(
            <form onSubmit={formSubmit}>
            <div className={styles.continer}>

                <div className={styles.hederContent}>

                    <div className={styles.backContent}>
                    
                    <FontAwesomeIcon icon={faAngleLeft} className={styles.icon_container} />
                    <a href="#" className={styles.backContentBody}>  Back to Order</a>
                    </div>

                    <div className={styles.hederTag}>
                        <h2 className={styles.headerText}> Table 3</h2>
                    </div>

                    <div className={styles.waiterTag}>
                        <p className={styles.waiterText}> Waiter : Rukshan</p>
                    </div>

                </div>

                <div className={styles.contentCustum}>

                    <div className={styles.tableContent}>
                        
        
                        
                            <div className={styles.left_table}>
                               <div className={styles.tb_list_container}>
                                <div className={styles.table_heder}>
                                    <div className={styles.tb_heder_left}>
                                        <p>Iteam</p>
                                    </div>
                                    <div className={styles.tb_heder_right}>
                                        <p>Quantity</p>
                                    </div>
                                </div>
                                {
                            Resturent && Resturent.map(restutrnts =>{
                                return(
                                <div className={styles.table_body}>
                            
                                    <div className={styles.tb_body_left}>
                                        <p>{restutrnts.item}</p>
                                    </div>
                                    <div className={styles.tb_body_right}>
                                        <p>{restutrnts.quantity}</p>
                                    </div>
                                </div>
                                )
                                })
                                }
                                </div>
                                <div className={styles.tb_list_editer}>
                            
                                    <div className={styles.tb_body_left}>
                                         <p className={styles.tb_edit_order}>Edit Order</p>
                                    </div>
                                    <div className={styles.tb_body_right}>
                                        <p></p>
                                    </div>
                                </div>
                        
                            </div>

                    

                

                        <div className={styles.right_table}> 
                    
                    
                            <div className={styles.table_heder}>
                                <div className={styles.tb_heder_left}>
                                    <p className={styles.heder_text}>Per Iteam</p>
                                </div>
                                <div className={styles.tb_heder_right}>
                                    <p>Price</p>
                                </div>
                            </div>
                            {
                        Resturent && Resturent.map(restutrnts =>{
                            return(
                            <div className={styles.table_body}>
                        
                                <div className={styles.tb_body_left}>
                                <p>{restutrnts.totel.pitem}</p>
                                </div>
                                <div className={styles.tb_body_right}>
                                <p>{restutrnts.totel.price}</p>
                                </div>
                            </div>
                            )
                            })
                            }

                            <div className={styles.table_body}>
                                <div className={styles.tb_body_left}>
                                    <p></p>
                                </div>
                                <div className={styles.tb_body_right}>
                                    <p className={styles.tb_sub_total_text}>Sub total</p>
                                </div>
                            </div>
                            <div className={styles.table_body}>
                                <div className={styles.tb_body_left}>
                                    <p></p>
                                </div>
                                <div className={styles.tb_body_right}>
                                    <p className={styles.tb_sub_total}>4,350 </p>
                                </div>
                            </div>
                            <div className={styles.table_body}>
                                <div className={styles.tb_body_left}>
                                    <p className={styles.tb_service_text}>Service Charge 10%</p>
                                </div>
                                <div className={styles.tb_body_right}>
                                    <p>435 </p>
                                </div>
                            </div>
                            <div className={styles.table_body}>
                                <div className={styles.tb_body_left}>
                                    <p> </p>
                                </div>
                                <div className={styles.tb_body_right}>
                                    <p className={styles.tb_total_text}>Total </p>
                                </div>
                            </div>
                            <div className={styles.table_body}>
                                <div className={styles.tb_body_left}>
                                    <p></p>
                                </div>
                                <div className={styles.tb_body_right}>
                                    <p className={styles.tb_total}>4,350 </p>
                                </div>
                            </div>
                    
                        </div>

                        
                        </div>

                        <div className={styles.paymentContent}>

                            
                            <div className={styles.btnSelect}>
                            <div className={styles.paymentLbl}>
                                <p> Payment By</p>
                            </div>

                                

                                <div className={styles.creditContent}>

                                <div className={styles.btnBody}>
                                    <button className={styles.cachBtn}> Cash</button>
                                </div>

                                <div className={styles.btn_crtidit_conteiner}>
                                <div className={styles.btnBody}>
                                        <button className={styles.creditBtn}> Credit Card</button>    
                                    </div>
                                    <div className={styles.creditType}>
                                        <p>3% Covenience Fee Will be added to bill for credit card</p>
                                    </div>

                                </div>

                                    
                                </div>
                            </div>

                            <div className={styles.custemerDetails}>
                                <div className={styles.formContaint}>
                                    
                                        <div className={styles.form}>

                                        
                                        <div className={styles.form__group}>
                                            <input type="text" className={styles.form__field} placeholder="Customer Name" name="name" value={query.name} onChange={handleParam()} />
                                            <label for="name" className={styles.form__label}>Customer Name</label>
                                         </div>   
                                         <div className={styles.form__group}>
                                         <input type="number" className={styles.form__field} placeholder="Customer Mobile No"   name="number"  value={query.number} onChange={handleParam()} />
                                            <label for="nuemailmber" className={styles.form__label}>Customer Mobile No</label>
                                        </div>
                                        

                                        </div>
                                   
                                
                                </div>
                                
                            </div>
                        </div>
                </div>

                <div className={styles.contentSubmit}>
                    <div className={styles.Order}>
                        <button  className={styles.btnOrder} type="submit" onClick={showData}> Complete Order </button> 
                    </div>
                </div>

            </div>
        </form>
        )
    }



    export default Payment 
