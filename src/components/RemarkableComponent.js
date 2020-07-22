import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
} from "react-native";
import CardComponent from "./toggleList/CardComponent";

const Remarkable = ({remarkable, setRemarkable, item}) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (remarkable === item.displayName) {
      setStatus(true);
    } else {
        setStatus(false);
    }
    console.log(remarkable)
  }, [remarkable]);

  return (
    <TouchableOpacity
      onPress={() => {
        setRemarkable(item.displayName);
      }}
    >
      <CardComponent title={item.displayName} status={status} />
    </TouchableOpacity>
  );
};

export default Remarkable;
