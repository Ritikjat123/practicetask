import { useState } from 'react';

function Todo() {


    const [data, setData] = useState({ name: "", age: "" });
    const [form, setForm] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name || data.age) {
            setForm([...form, data])
            setData({ name: "", age: "" });
        } else {
            alert("please fill the form");
            setData({ name: "", age: "" });
        }
    }

    const deletebtn = (index) => {
        const newForm = form.filter((item, index) => item !== form[index]);
        setForm(newForm);
        setData({ name: "", age: "" });

    }
    const updatebtn = (index) => {
        const updateForm = form.filter((item, index) => item === form[index]);
        setData({ name: updateForm[0].name, age: updateForm[0].age });
        const newForm = form.filter((item, index) => item !== form[index]);
        setForm(newForm);
    }
    return (

        <div className="App">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>

                <input type='text' placeholder='enter name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <br />
                <input type='text' placeholder='enter age' value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })}></input>
                <br />
                <button type='submit'>Submit</button>
            </form>
            <h2>form data</h2>
            <ul>
                {form.map((item, index) => (
                    <div>
                        <li key={index}>
                            <span> Name:{item.name}</span> ,
                            <span>Age:{item.age}</span>
                            <button onClick={deletebtn}>delete</button>
                            <button onClick={updatebtn}>Update</button>

                        </li>

                    </div>
                ))}
            </ul>

        </div>
    )
}

export default Todo;

