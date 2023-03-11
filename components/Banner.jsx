
import {Image} from 'react-native'
export default function Banner(props) {
  return (
    <Image source={require(`../assets/image/${props.name}.jpg`)}
      style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
    ></Image>
  );
}