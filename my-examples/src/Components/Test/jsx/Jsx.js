const Jsx = () => {

    const user = {
        ad:"Ali",
        soyad:"Veli",
        yas:25,
    }

    return (
        <div>
            User : {user.ad} , {user.soyad} , {user.yas}
        </div>
    );
}

export default Jsx;