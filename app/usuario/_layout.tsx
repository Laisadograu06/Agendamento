import {Tabs} from "expo-router"
import{FontAwesome} from '@expo/vector-icons'

export default function Layout(){
    return (   
        <Tabs>
            <Tabs.Screen
            name='index' options= {{title: 'Index', headerShown: false,
                tabBarIcon: ({focused,size,color}) => {
                    if(focused)
                        return <FontAwesome name="home" size={32} color={color} />
                    else
                        return <FontAwesome name="home" size={32} color={color} />
                }
                
            }}/>

            <Tabs.Screen name='consultas' options= {{title: 'Consultas',
                tabBarIcon: ({focused,size,color}) => {
                    if(focused)
                        return <FontAwesome name="calendar" size={32} color={color} />
                    else
                        return <FontAwesome name="calendar" size={32} color={color} />
                }
            }} />
            <Tabs.Screen name='perfil' options= {{title: 'Perfil',
                tabBarIcon: ({focused,size,color}) => {
                    if(focused)
                        return <FontAwesome name="user-o" size={32} color={color} />
                    else
                        return <FontAwesome name="user-o" size={32} color={color} />
                }
            }} />
            <Tabs.Screen name='pesquisa' options= {{title: 'pesquisa', headerShown: false,
                tabBarIcon: ({focused,size,color}) => {
                    if(focused)
                        return <FontAwesome name="search" size={32} color={color} />
                    else
                        return <FontAwesome name="search" size={32} color={color} />
                }
            }} />
        </Tabs>
    )
}