import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, StyleSheet} from 'react-native';

styles=StyleSheet.create({
    scroller: {
        flex: 1,
        color:"white"
    },
    text:{
        color: "white", 
    }
});

export default class IosFonts extends Component{
  render (){
    return(
      <ScrollView style={styles.scroller}>
        <Text style={{fontFamily: 'Academy Engraved LET'}}>Academy Engraved LET </Text>
        <Text style={{fontFamily: 'AcademyEngravedLetPlain'}}>AcademyEngravedLetPlain </Text>
        <Text style={{fontFamily: 'Al Nile'}}>Al Nile </Text>
        <Text style={{fontFamily: 'Apple SD Gothic Neo'}}>Apple SD Gothic Neo </Text>
        <Text style={{fontFamily: 'Arial'}}>Arial </Text>
        <Text style={{fontFamily: 'Avenir'}}>Avenir </Text>
        <Text style={{fontFamily: 'Bangla Sangam MN'}}>Bangla Sangam MN </Text>
        <Text style={{fontFamily: 'Baskerville'}}>Baskerville </Text>
        <Text style={{fontFamily: 'Bodoni 72'}}>Bodoni 72 </Text>
        <Text style={{fontFamily: 'Bodoni 72 Oldstyle'}}>Bodoni 72 Oldstyle </Text>
        <Text style={{fontFamily: 'Bodoni 72 Smallcaps'}}>Bodoni 72 Smallcaps </Text>
        <Text style={{fontFamily: 'Cochin'}}>Cochin </Text>
        <Text style={{fontFamily: 'Courier'}}>Courier </Text>
        <Text style={{fontFamily: 'Damascus'}}>Damascus </Text>
        <Text style={{fontFamily: 'Didot'}}>Didot </Text>
        <Text style={{fontFamily: 'DiwanMishafi'}}>DiwanMishafi </Text>
        <Text style={{fontFamily: 'Euphemia UCAS'}}>Euphemia UCAS </Text>
        <Text style={{fontFamily: 'Farah'}}>Farah </Text>
        <Text style={{fontFamily: 'Futura'}}>Futura </Text>
        <Text style={{fontFamily: 'Geeza Pro'}}>Geeza Pro </Text>
        <Text style={{fontFamily: 'Georgia'}}>Georgia </Text>
        <Text style={{fontFamily: 'Gill Sans'}}>Gill Sans </Text>
        <Text style={{fontFamily: 'Heiti SC'}}>Heiti SC </Text>
        <Text style={{fontFamily: 'Heiti TC'}}>Heiti TC </Text>
        <Text style={{fontFamily: 'Helvetica'}}>Helvetica </Text>
        <Text style={{fontFamily: 'Hiragino Mincho ProN'}}>Hiragino Mincho ProN </Text>
        <Text style={{fontFamily: 'Hiragino Sans'}}>Hiragino Sans </Text>
        <Text style={{fontFamily: 'HiraginoSans-W3'}}>HiraginoSans-W3 </Text>
        <Text style={{fontFamily: 'HiraginoSans-W6'}}>HiraginoSans-W6 </Text>
        <Text style={{fontFamily: 'HiraMinProN-W3'}}>HiraMinProN-W3 </Text>
        <Text style={{fontFamily: 'HiraMinProN-W6'}}>HiraMinProN-W6 </Text>
        <Text style={{fontFamily: 'Hoefler Text'}}>Hoefler Text </Text>
        <Text style={{fontFamily: 'HoeflerText-Black'}}>HoeflerText-Black</Text>
        <Text style={{fontFamily: 'Iowan Old Style'}}>Iowan Old Style </Text>
        <Text style={{fontFamily: 'Kailasa'}}>Kailasa </Text>
        <Text style={{fontFamily: 'Kailasa-Bold'}}>Kailasa-Bold </Text>
        <Text style={{fontFamily: 'Khmer Sangam MN'}}>Khmer Sangam MN </Text>
        <Text style={{fontFamily: 'Kohinoor Bangla'}}>Kohinoor Bangla </Text>
        <Text style={{fontFamily: 'Kohinoor Devanagari'}}>Kohinoor Devanagari </Text>
        <Text style={{fontFamily: 'Kohinoor Telugu'}}>Kohinoor Telugu </Text>
        <Text style={{fontFamily: 'Lao Sangam MN'}}>Lao Sangam MN </Text>
        <Text style={{fontFamily: 'Malayalam Sangam MN'}}>Malayalam Sangam MN </Text>
        <Text style={{fontFamily: 'Menlo'}}>Menlo </Text>
        <Text style={{fontFamily: 'Optima'}}>Optima </Text>
        <Text style={{fontFamily: 'Optima-Bold'}}>Optima-Bold </Text>
        <Text style={{fontFamily: 'Palatino'}}>Palatino </Text>
        <Text style={{fontFamily: 'Party LET'}}>Party LET </Text>
        <Text style={{fontFamily: 'PartyLetPlain'}}>PartyLetPlain </Text>
        <Text style={{fontFamily: 'PingFang HK'}}>PingFang HK </Text>
        <Text style={{fontFamily: 'Sinhala Sangam MN'}}>Sinhala Sangam MN </Text>
        <Text style={{fontFamily: 'SinhalaSangamMN'}}>SinhalaSangamMN </Text>
        <Text style={{fontFamily: 'SinhalaSangamMN-Bold'}}>SinhalaSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Snell Roundhand'}}>Snell Roundhand </Text>
        <Text style={{fontFamily: 'Symbol'}}>Symbol </Text>
        <Text style={{fontFamily: 'Tamil Sangam MN'}}>Tamil Sangam MN </Text>
        <Text style={{fontFamily: 'TamilSangamMN-Bold'}}>TamilSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Telugu Sangam MN'}}>Telugu Sangam MN </Text>
        <Text style={{fontFamily: 'Thonburi'}}>Thonburi </Text>
        <Text style={{fontFamily: 'Times New Roman'}}>Times New Roman </Text>
        <Text style={{fontFamily: 'Trebuchet MS'}}>Trebuchet MS </Text>
        <Text style={{fontFamily: 'Trebuchet-BoldItalic'}}>Trebuchet-BoldItalic </Text>
        <Text style={{fontFamily: 'TrebuchetMS-Bold'}}>TrebuchetMS-Bold </Text>
        <Text style={{fontFamily: 'TrebuchetMS-Italic'}}>TrebuchetMS-Italic </Text>
        <Text style={{fontFamily: 'Verdana'}}>Verdana </Text>
        <Text style={{fontFamily: 'Verdana-Bold'}}>Verdana-Bold </Text>
        <Text style={{fontFamily: 'Verdana-BoldItalic'}}>Verdana-BoldItalic </Text>
        <Text style={{fontFamily: 'Verdana-Italic'}}>Verdana-Italic </Text>
        <Text style={{fontFamily: 'Zapf Dingbats'}}>Zapf Dingbats </Text>
        <Text style={{fontFamily: 'ZapfDingbatsITC'}}>ZapfDingbatsITC </Text>
        <Text style={{fontFamily: 'Zapfino'}}>Zapfino </Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('IosFonts', () => IosFonts);
