import React, { useState } from 'react'
import{
    container,
    icBack,
    head_bar,
} from '../../components/layout.module.css'
import ButtonLayout from '../../components/buttonLayout'
import Data from '../../db'
import { navigate } from 'gatsby';

const Enroll = () => {

    const [ inputs, setInputs ] = useState({
        title: '',
        category: '',
        price: '',
        place: '',
        phone: '',
        body: '',
    });

    const [ lists, setLists] = useState();

    const { title, category, price, place, phone, body} = inputs;

    const onChange = (event) =>{
        const { value, name } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        console.log(inputs);
    };

    
    const submitHandler = () =>{
        setLists({
            ...Data,
            inputs
        });
        console.log(lists);
    }

    const home = () => {
        navigate('/');
    }

    const onReset = () => {
        setInputs({
            title: '',
            category: '',
            price: '',
            place: '',
            phone: '',
            body: '',
        });
    }

    return (
        <div className={container}>
            <title>상품 등록하기</title>
            <main>
                <nav>
                    <div className={head_bar}>
                        <ButtonLayout option={icBack}/>
                        상품등록
                    </div> 
                </nav>
                <form>
                    <input name="title" type="text" defaultValue={title} placeholder='제목' onChange={onChange}></input>
                    <input name="category" type="text" defaultValue={category} placeholder='카테고리' onChange={onChange}></input>
                    <input name="price" type="text" defaultValue={price} placeholder='가격' onChange={onChange}></input>
                    <input name="place" type="text" defaultValue={place} placeholder='거주동네' onChange={onChange}></input>
                    <input name="phone" type="text" defaultValue={phone} placeholder= '전화번호' onChange={onChange}></input>
                    <input name="body" type="text" defaultValue={body} placeholder='세부정보' onChange={onChange}></input>
                    {/*<input name="image" type="image" placeholder='이미지정보' alt="등록상품이미지"></input>*/}
                    <button type="submit" onSubmit={submitHandler}>등록</button>
                    <button type="reset" onClick={onReset}>초기화</button>
                </form>
                <button onClick={home}>홈으로</button>
            </main>
        </div>

    )
}

export default Enroll