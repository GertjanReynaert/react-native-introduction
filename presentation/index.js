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
  Link,
  Image,
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
  flex: require("../assets/flexbox_flex.png"),
  flexDirection: require("../assets/flex-direction.svg"),
  justifyContent: require("../assets/justify-content.svg"),
  alignItems: require("../assets/align-items.svg")
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
              { loc: [18, 19], title: "Props" },
              { loc: [3, 6], title: "State" },
              { loc: [22, 25], title: "State" },
              { loc: [28, 29], title: "State" },
              { loc: [8, 16], title: "State" },
              { loc: [11, 12], title: "State" },
              { loc: [14, 15], title: "State" }
            ]}
          />

          <CodeSlide
            style={{ fontSize: 25 }}
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/snippets/lifecycle-hooks")}
            ranges={[
              { loc: [0, 250], title: "Lifecycle hooks" },
              { loc: [8, 12], note: "componentWillMount" },
              { loc: [13, 16], note: "componentWillUnmount" },
              { loc: [17, 21], note: "componentWillReceiveProps" },
              { loc: [22, 29], note: "shouldComponentUpdate" },
              { loc: [30, 33], note: "componentWillUpdate" },
              { loc: [34, 37], note: "componentDidUpdate" },
              { loc: [38, 42], note: "componentWillUnmount" },
              { loc: [43, 55], note: "render" }
            ]}
          />

          <Slide
            notes={`
            Inline (onClick, onChange, onKeyDown, onMouseOver,...)
            Real method calls, not method names that then get dynamically invoked
            `}
          >
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Event handling
            </Heading>
          </Slide>

          <Slide notes="State + props, context as fallback, global js context, Redux, MobX, ...">
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              No data management
            </Heading>
          </Slide>

          <Slide notes="Essential for declarative nature + performance, ideal for RN abstraction">
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Virtual DOM
            </Heading>
          </Slide>

          <Slide
            notes={`
Getting Started
Tutorial
Props
State
Style
Height and Width
Layout with Flexbox
Handling Text Input
Using a ScrollView
Using a ListView
Networking
Using Navigators
More Resources

Integration With Existing Apps
Colors
Images
Handling Touches
Animations
Accessibility
Timers
Direct Manipulation
Debugging
Testing
Running On Device
JavaScript Environment
Navigation
Performance
Understanding the CLI
Upgrading
Platform Specific Code
Gesture Responder System
            `}
          >
            <Heading size={1} lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React Native
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Native
            </Heading>

            <List>
              <ListItem>JS abstraction on top of Obj.C / Java</ListItem>
              <ListItem>Better development experience</ListItem>
              <ListItem>Native so fallback possible</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Virtual ...
            </Heading>

            <Text>
              virtual dom => virtual components
            </Text>
          </Slide>

          <Slide>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              React Native
            </Heading>

            <Text>
              jsx => xml to native components
            </Text>

            <CodePane
              style={{ fontSize: 18, marginTop: 30 }}
              lang="jsx"
              source={`<View />
<Text />
<TextInput />
<Image />`}
            />
          </Slide>

          <Slide
            notes={`
            dasherized properties become camelCased
            `}
          >
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Styling
            </Heading>
            <List>
              <ListItem>CSS-in-js</ListItem>
              <ListItem>Unitless dimensions (different ppi)</ListItem>
            </List>
          </Slide>

          <CodeSlide
            style={{ fontSize: 25 }}
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/snippets/native-style")}
            ranges={[
              { loc: [0, 25], title: "Style examples" },
              { loc: [22, 23], note: "Inline notation" },
              { loc: [3, 17], note: "Stylesheet" },
              { loc: [4, 7] },
              { loc: [23, 24], note: "Single 'class'" },
              { loc: [12, 16] },
              { loc: [24, 25], note: "Combinations" },
              { loc: [7, 12] },
              { loc: [25, 26], note: "Overrides" }
            ]}
          />
          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Flexbox
            </Heading>

            <List>
              <ListItem>flex</ListItem>
              <ListItem>flexDirection</ListItem>
              <ListItem>justifyContent</ListItem>
              <ListItem>alignItems</ListItem>
            </List>

            <Link href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
              CSS-tricks cheat sheet
            </Link>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Flexbox
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Flex
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="js"
              source={require("raw!../assets/snippets/flexbox_flex")}
            />
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Flexbox
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Flex
            </Heading>

            <Image src={images.flex} height={300}/>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ margin: "0 0 30px 0" }}>
              Networking
            </Heading>

            <List>
              <ListItem>fetch</ListItem>
              <ListItem>xmlHttpRequest</ListItem>
              <ListItem>websockets</ListItem>
            </List>
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

            <List>
              <ListItem>(Auto) Reloading</ListItem>
              <ListItem>Redbox/Yellowbox</ListItem>
              <ListItem>Chrome dev tools</ListItem>
            </List>
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

        </Deck>
      </Spectacle>
    );
  }
}
