const Contact = () => {
    return (
        <div className="m-4 p-4">
            <h1 className="text-2xl font-bold">Contact Us Page</h1>
            <h2 className="text-2xl font-bold">Contact Us in below email address:</h2>
            <h2 className="text-2xl font-bold">msdsubrata9@gmail.com</h2>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-grey-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;