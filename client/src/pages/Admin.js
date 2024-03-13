import React, { useState } from "react";
import '../style/Admin.css'
import { createActor, deleteActor } from "../http/actorAPI";

const Admin = () => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [file, setFile] = useState(null)

    const [id, setId] = useState(null)

    const [fileName, setFileName] = useState('Выберите изображение')

    const selectFile = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const addActor = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('gender', gender)
        formData.append('img', file)
        createActor(formData)
    }

    const DeleteActor = () => {
        deleteActor(id)
    }

    return (
        <div className="admin-line">
            <h1>Добавьте актёра</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} className="admin-input-1" placeholder="Имя актёра"/>
            <input value={gender} onChange={(e) => setGender(e.target.value)} className="admin-input-2" placeholder="Пол"/>
            <label class="input-file">
                <input onChange={selectFile} type="file" name="file"/>
                <span>{fileName}</span>
            </label>
            <button onClick={addActor} className="admin-btn-1">Добавить</button>
            <h1>Удалить актёра</h1>
            <input value={id} onChange={(e) => setId(e.target.value)} className="admin-input-3" placeholder="ID актёра"/>
            <button onClick={DeleteActor} className="admin-btn-2">Удалить</button>
        </div>
    )
}

export default Admin