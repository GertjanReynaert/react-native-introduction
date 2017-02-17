// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Spectacle,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white", // White
  secondary: "#1F2022", // Dark gray
  tertiary: "#03A9FC", // Blue
  quartenary: "#CECECE" // Light gray
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} bgColor="primary" textColor="secondary">
        <Deck
          progress="bar"
          transition={["fade", "slide"]}
          transitionDuration={500}
        >
          <Slide>
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Thinking in React
            </Heading>

            <List>
              <ListItem>Step 1: UI to component hierarchy</ListItem>
              <ListItem>Step 2: Build A Static Version</ListItem>
              <ListItem>Step 3: Identify the UI state</ListItem>
              <ListItem>Step 4: Identify the place for your state</ListItem>
              <ListItem>Step 5: Add Inverse Data Flow</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1}>
              {"<JSX />"}
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Templates
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="xml"
              source={require("raw!../assets/snippets/jsx")}
            />
          </Slide>

          <Slide>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Expressions
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={require("raw!../assets/snippets/jsx-expressions")}
            />
          </Slide>

          <Slide>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Conditional rendering
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={require("raw!../assets/snippets/jsx-is-code")}
            />
          </Slide>

          <Slide>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Lists and keys
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={require("raw!../assets/snippets/jsx-lists-and-keys")}
            />
          </Slide>


          {/*<Slide
            notes={`
            <ul>
              <li>XML markup</li>
              <li>Looks like html, but isn't</li>
              <li>Compiles to Javascript</li>
            </ul>
            `}
          >
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: '0 0 30px 0' }}>
              JSX
            </Heading>

            <Layout>
              <Fill style={{ marginRight: 20 }}>
                <Text>From</Text>
                <CodePane
                  lang="xml"
                  source={" <div className=\"sidebar\" /> "}
                />
              </Fill>

              <Fill>
                <Text>To</Text>
                <CodePane
                  lang="js"
                  source={"React.createElement( 'div', { className: 'sidebar' }, null) "}
                />
              </Fill>
            </Layout>
          </Slide>*/}

          {/*<Slide>
            <Heading size={1} lineHeight={1} style={{ margin: '0 0 30px 0' }}>
              Virtual DOM
            </Heading>
          </Slide>*/}

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Components
            </Heading>

            <List>
              <ListItem>React.createClass({})</ListItem>
              <ListItem>Stateless component</ListItem>
              <ListItem>class x extends React.Component</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Components
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Stateless
            </Heading>

            <CodePane
              style={{ margin: "0 0 30px 0", fontSize: 18 }}
              lang="jsx"
              source={require("raw!../assets/snippets/components-stateless")}
            />

            <Appear>
              <CodePane
                style={{ fontSize: 18 }}
                lang="jsx"
                source={require("raw!../assets/snippets/components-stateless-better")}
              />
            </Appear>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Components
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Class
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={require("raw!../assets/snippets/components-class")}
            />
          </Slide>

          <CodeSlide
            style={{ fontSize: 25 }}
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/snippets/props-and-state")}
            ranges={[
              { loc: [0, 25], title: "Props & State" },
              { loc: [1, 3], title: "Props" },
              { loc: [9, 10], title: "Props" },
              { loc: [3, 6], title: "State" },
              { loc: [11, 14], title: "State" }
            ]}
          />

          <CodeSlide
            style={{ fontSize: 25 }}
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/snippets/lifecycle-hooks")}
            ranges={[
              { loc: [0, 250], title: "Lifecycle hooks" }
            ]}
          />

          <Slide>
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Event handling
            </Heading>
          </Slide>

          <Slide notes="React.PropTypes & Flow (make reference to TypeScript)">
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Typechecking
            </Heading>
          </Slide>

          <Slide notes="State + props, context as fallback, global js context, Redux, MobX, ...">
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              No data management
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React-Native
            </Heading>
            <List>
              <ListItem> Framework/Library </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React-Native
            </Heading>
            <Text>
              jsx => xml to native views/components
            </Text>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Styling
            </Heading>
            <Text>
              Flex box => native layout system
              Unitless dimensions (different ppi)
            </Text>
          </Slide>

          <Slide>
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React-Native
            </Heading>
            <Text>
              virtual dom => virtual components
            </Text>
          </Slide>

          <Slide>
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React-Native
            </Heading>
            <Text>
              bridge => json data communication, event bridge
            </Text>
          </Slide>

          <Slide>
            <Heading size={1} >
              React-Native
            </Heading>
            <Text>
              Data fetching => fetch or xmlHttp => native fetching methods
            </Text>
            <Text>
              Data storage: temporary => component state, permanent => async storage
            </Text>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Platform specific
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Inline ternary
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="js"
              source="Platform.OS === 'android' ? 'android text' : 'ios text'"
            />
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Platform specific
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Extension based
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="js"
              source="import Component from './Component'"
            />
            <List>
              <ListItem>component.ios.js</ListItem>
              <ListItem>component.android.js</ListItem>
            </List>
            <List>
              <ListItem>component.windows.js</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Debugging
            </Heading>

            <Text>
              Set application in debug mode, open chrome devtools on the debugger localhost url,
              use breakpoints and console.log statements
            </Text>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              RN vs Xamarin/Phonegap/...
            </Heading>

            <Text>
              Native vs Webview
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
