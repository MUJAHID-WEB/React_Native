import { View, Text, FlatList, StyleSheet, ScrollView, SectionList } from 'react-native';

const ListReact = () => {

    const userInfo = [
        {
            name: 'Mujahid',
            data: ['PHP', 'Python', 'React'],
            id: 1
        },
        {
            name: 'Islam',
            data: ['PHP', 'Python', 'React'],
            id: 2
        },
        {
            name: 'Maruf',
            data: ['PHP', 'Python', 'React'],
            id: 3
        },
        {
            name: 'Aleam',
            data: ['PHP', 'Python', 'React'],
            id: 4
        },
    ]
    const users = [
        {
            name: 'Mujahid',
            email: 'mujahid@gmail.com',
            id: 1
        },
        {
            name: 'Islam',
            email: 'islam@gmail.com',
            id: 2
        },
        {
            name: 'Maruf',
            email: 'maruf@gmail.com',
            id: 3
        },
        {
            name: 'Aleam',
            email: 'aleam@gmail.com',
            id: 4
        },
    ]

    const data = [
        {
            name: 'Mujahid',
            id: 1
        },
        {
            name: 'Islam',
            id: 2
        },
        {
            name: 'Maruf',
            id: 3
        },
        {
            name: 'Aleam',
            id: 4
        },
        {
            name: 'Hossain',
            id: 5
        },
        {
            name: 'Mujahid',
            id: 1
        },
        {
            name: 'Islam',
            id: 2
        },
        {
            name: 'Maruf',
            id: 3
        },
        {
            name: 'Aleam',
            id: 4
        },
        {
            name: 'Hossain',
            id: 5
        },
        {
            name: 'Mujahid',
            id: 1
        },
        {
            name: 'Islam',
            id: 2
        },
        {
            name: 'Maruf',
            id: 3
        },
        {
            name: 'Aleam',
            id: 4
        },
        {
            name: 'Hossain',
            id: 5
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 20, color: 'red' }}> FlatList, Custom List with map, Grid view, Component in Loop with Flatlist and Section List in React Native</Text>

            <SectionList
                sections={userInfo}
                renderItem={({ item }) => <Text style={{fontSize:20, paddingLeft: 15}}> {item}</Text>}
                renderSectionHeader={({section:{name}})=><Text style={{fontSize:30, color:'blue'}}> {name}</Text>}
            />


            {/* <FlatList
                data={users}
                renderItem={({ item }) => <Text style={InStyles.listItem}> {item.name}</Text>}
            /> */}



            {/* <FlatList
                data={users}
                renderItem={({ item }) => <UserData user={item} />}
            /> */}

            {/* <View style={{flex:1, flexDirection:'row', flexWrap:'wrap' }}>
              
                    {
                        data.map((map) => <Text style={InStyles.listItem}> {map.name}</Text>)
                    }
            
            </View> */}

            {/* <ScrollView>
                {
                    data.map((map) => <Text style={InStyles.listItem}> {map.name}</Text>)
                }
            </ScrollView> */}

        </View>
    )
}

const UserData = (props) => {
    const item = props.user
    return (
        <View style={InStyles.box}>
            <Text style={InStyles.item}> {item.name}</Text>
            <Text style={InStyles.item}> {item.email}</Text>
        </View>
    )
}



const InStyles = StyleSheet.create({

    listItem: {
        fontSize: 20,
        color: 'black',
        height: 50,
        borderColor: 'blue',
        borderWidth: 3,
        margin: 10,
        borderRadius: 15,
        textAlignVertical: 'center',
        padding: 10


    },

    item: {
        flex: 1,
        fontSize: 15,
        color: 'black',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',

    },

    box: {
        flexDirection: 'row',
        borderColor: 'blue',
        borderWidth: 3,
        margin: 10,

    },
})

export default ListReact;