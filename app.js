// const greeting = <h1>Hello World</h1>
// const greeting2 = <h1>Hello World</h1>

function Greeting(props) {
    //props itu bertipe object!!!
    console.log(props); //{ username: 'Michele', email:}

    return (
        <div>
            <h1>Hello { props['username'] } </h1>
            { props['email'] && <h2> {props['email']} </h2>  }
            <Hobby favorite={props.hobby} />
            <p>Lorem Ipsum</p>
        </div>
    )
}

function Hobby(props) {
    return (
        <ul>
            { props.favorite.map((fav, iFav) => (
                <li key={iFav}> {fav} </li>
            )) }
        </ul>
    )
}

function InputName() {
    return (
        <input placeholder="insert your name"></input>
    )
}


/* contoh compoennt menggunakan class */
// class Menyapa extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Halo Dunia</h1>
//             </div>
//         )
//     }
// }

const app = (
    <div>
        <InputName />
        <Greeting username="Michele" email="michele@mail.com" hobby={ [ 'berenang', 'baca buku'] } />
        <Greeting username="Calvin" hobby={ [ 'baca buku'] }/>
        <Greeting username="Icha" hobby={ [ 'nonton', 'traveling'] }/>

        <Hobby favorite={ [ 'hobby dari array', 'hobby dari array lain'] } />

        {/* <Movie /> */}
        {/* buatlah component Movie dengan props title, year dan desc */}
    </div>
)

ReactDOM.render(app, document.getElementById('app'));

