import React, {useState} from 'react'
const API = process.env.REACT_APP_API

export const Users = () => {
    
    const [name, setName] = useState("")
    const [user, setUser] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${API}users/${name}`)
        const data = await res.json()
        setUser(data)
    }

    return (
    <>
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-8">
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input 
                        type="text" 
                        onChange={e => setName(e.target.value)} 
                        value={name} 
                        className="form-control"
                        placeholder="Type a Name to know it's gender"
                        autoFocus
                    />
                    </div>
                    <button className="btn btn-primary btn-block"> Search </button>
                </form>
            </div>
            <div className="col-md-2">
            </div>
        </div>
        <div className="col-md-12">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Web Site</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    )
    }