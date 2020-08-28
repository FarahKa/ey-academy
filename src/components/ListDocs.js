import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";
import { trainingService } from "../services/trainingsService";


const ListDocs = ({ training }) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("chevron-down");

  const getDate = (str) => {
      date = new Date(str);
      return date.getUTCDate() + "/" + (date.getUTCMonth() + 1 ) + "/" + date.getUTCYear(); 
  }

  const icons = {
      pdf : "https://img.icons8.com/fluent/344/pdf.png",
      doc : "https://img.icons8.com/dusk/344/word.png",
      file : "https://img.icons8.com/fluent/344/file.png"
  }
  

  const toggleStuff = () => {
    if (toggle) {
      setToggle(false);
      setName("chevron-down");
    } else {
      setToggle(true);
      setName("chevron-up");
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.background} onPress={toggleStuff}>
        <Text style={styles.title}>{training.trainingName}</Text>
        <Feather style={styles.icon} name={name}/>
      </TouchableOpacity>
      {toggle ? (
        <View style={styles.card}>
          <FlatList
            data={training.documents}
            keyExtractor={document => document.id}
            renderItem={({ item : document }) => {
                var ext = document.title.substring(document.title.lastIndexOf('.')+1, document.title.length) || document.title;
                var img = icons.file;
                if(ext === "pdf"){
                    img = icons.pdf;
                } else if (ext === "docx" || ext === "txt"){
                    img = icons.doc;

                }
                return (    
                <TouchableOpacity
                onPress={() => {
                    trainingService.getDocument(document.id).then((response) => {console.log(response)})
                }}
                style={styles.container}>
                    <View style={styles.memberCard}>
                      <Image style={styles.image} source={{ uri: img }} />
                      <Text style={styles.name}>
                        {document.title} {`\n`}
                        Desc: {document.description} {`\n`}
                        Date: {getDate(document.date)}
                      </Text>
                    </View>
                  </TouchableOpacity>);
              }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 5,
    //marginBottom: 5,
    backgroundColor: colors.MISCHKA,
    height: 50,
    //borderRadius: 3,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    //fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    //marginBottom: 5,
    textTransform: "uppercase",
    color: colors.DARK_GREY,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  icon: {
    fontSize:18,
    marginRight:5,
  },
  container: {
    marginRight: 10,
  },
  memberCard: {
    height: 100,
    borderRadius: 25,
    marginVertical: 4,
    marginLeft: 5,
    backgroundColor: colors.S_DIMMER,
    borderColor:"rgb(245, 200, 66)",
    borderWidth: 2,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    margin: 20,
  },
  name: {
    alignSelf: "center",
    // fontWeight: "bold",
    color: colors.MISCHKA,
    flexWrap: 'wrap',
  },
});

export default ListDocs;
