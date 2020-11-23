import PropTypes from 'prop-types';


const App = () => {
  const profiles = [
    {name : "Taro", age : 10},
    {name : "hanako", age : 10},
    {name : "itiro", age : 10},
    {name : "jiro"}
  ]
  return (
  <div>
    {
      profiles.map( (profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      }
      )
    }
    <User name={"Taro"} age={20}/>
    <User name={"Hanako"} age={5}/>
  </div>
  )
}

const User = (props) => {
  return <div>I am {props.name} , and {props.age}years old!</div>
}

User.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number.isRequired//nullか数値以外はエラー
}


User.defaultProps = { //年齢がなかったらデフォルトで1歳になる
  age: 1
}

export default App;
