import React from 'react';

const StatusFrom = () => {
    const handleSts=event=>{
        event.preventDefault();
        const form=event.target;
        console.log(event)
        const name = form.name.value;
        const pic = form.pic.value;
        const formData=new FormData();
        formData.append('image',pic)
        const url=`https://api.imgbb.com/1/upload?&key=718b499ebceb0f158b38ef38529aa38a`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        console.log(name,pic)

    }
    return (
        <div>
           <form onSubmit={handleSts}>
           <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status Caption</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status pic</span>
                            </label>
                            <input type="file" name='pic' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit " className="btn btn-primary" value="SignUp" /> */}
                            <button className="btn btn-primary">Submit</button>

                        </div>
           </form>
        </div>
    );
};

export default StatusFrom;