import React from "react"
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Image,
    Pressable,
    Linking
} from 'react-native'


const colorGithub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/52607671?v=4';
const urlToMyGitHub = 'https://github.com/Vittorr';

const App = () => {

    const handlePressGoToGitHub = async () => {

        console.log('Verificando link')
        const res = await Linking.canOpenURL(urlToMyGitHub);

        if(res) {
            console.log('Link aprovado')
            console.log('Abrindo Link...')
            await Linking.openURL(urlToMyGitHub);
        }
    }

    return <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
        <View style={style.content}>

            {/* <Text style={style.text}>Hello world</Text> */}

            <Image 
            accessibilityLabel="Foto de perfil do GitHub de PV" 
            style={style.avatar} 
            source={{uri: imageProfileGitHub}} 
            />

            <Text 
            accessibilityLabel="Nome completo do usuário" 
            style={[style.defaultText, style.name, /*{color: 'red'}*/]}>
                Paulo Vitor Alves de Oliveira
            </Text>

            <Text 
            accessibilityLabel="Nickname do usuário" 
            style={[style.defaultText, style.nickname]}>
                Vittorr
            </Text>

            <Text 
            accessibilityLabel="Descrição do usuário" 
            style={[style.defaultText, style.description]}>
                Hello, new in the technological area and actually doing Information Systems on Federal University of Pernambuco. I have 18 years and i'm excited to learn more.
            </Text>

            {/* <Pressable onPress={() => console.log("github")}> */}
            <Pressable onPress={handlePressGoToGitHub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in GitHub!</Text>
                </View>
            </Pressable>
        </View>

        {/* ex: se botássemos uma duplicata dessa foto ela aparecia em colunas exceto com a alteração do flexDirection -> para row */}

    </SafeAreaView>
};

export default App


const style = StyleSheet.create({
    container: { // Columns
        backgroundColor: colorGithub,
        flex: 1, // Expandir para tela inteira
        justifyContent: 'center', // ---> esse sim alinha com a tela do celular toda!
        alignItems: 'center',
        // flexDirection: 'row', // --> faz com que novos elementos entrem em linhas e nao colunas!
    },

    content: {
        alignItems: 'center', // --> (ex: flex-end / flex-start / center) OBS: esse só alinha com a linha em que está presente os elementos
        padding: 20, // --> para nao ficar muito encostado nas laterais e etc (ou seja coloca um espaço interno entre os elementos)
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100, // sempre bom colocar como metade dos pixels da imagem! -> transformou em um circulo bonitinho
        borderColor: 'white',
        borderWidth: 2, // --> esses dois trabalham na cor da borda e a expressura dela
    },

    defaultText: {
        color: colorFontGitHub,
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },


    // text: {
    //     fontSize: 50,
    //     fontWeight: 'bold',
    //     color: 'black'
    // }
});

// view para visualizar no cel
// text para digitar algo na tela

// CTRL + M no emulador para inspecionar elementos....

// passamos para a view um estilo de um stylesheet que tem o nome container!!

// react-native usa o flax-box por padrao

// stylesheet para colocar estilos cores alterar tamanho tipos de texto etc... (estilização)
// OBS: --> criamos uma folha de estilo que irá conter todos os estilos que iremos utilizar!!

// SafeAreaView --> ex: em alguns celulares temos uma area que nao pega a tela (como o "dente" no topo dos iphones) 
// ---------> isso faz com que a gente consiga delimitar a area de trabalho...

// OBS: irá proteger o componente de sair para uma área que nao tenha acesso!!


// StatusBar --> afeta a area de status no topo do celular... ex: barStyle = altera como os icones no topo vao ser (como negrito com o darq-mode)


// Image ---> podemos colocar imagens tambem... basta importar do react-native e utilizá-la como mostrado acima
// --> podemos acessar outras coisas também
// ex: acessibilidade


// Flex Box --> forma de alinhar os componentes na tela!
// --> por padrão eles são feitos por coluna... isto é: cada elemento novo ficará um abaixo do outro!! --> podemos mudar isso com flexDirection!

// OBS: o estilo aceita um estilo só ou um array de estilos!!!

// OBS: mantivemos um mesmo padrão de estilo geral para os textos porém alteramos só detalhes de sua aparencia!!

// Pressable --> criar um botao na tela que pode ser pressionado e interagir com o mobile...
// ex: onPress --> fazer algo quando pressionar/clicar


// Usar funcionalidade Linking --> é assincrono pois ele vai conseguir esperar por m resultado
// OBS: lembrar da aula de assincronicidade... await... etc...

// OBS: precisou adicionar uma nova funcionalidade no AndroidManifest.xml.... ---> capacidade de interagir com linqs e tals...
// ---> queries.... para trabalhar com urls



