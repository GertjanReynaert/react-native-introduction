// Import React
import React from "react";

// Import Spectacle Core tags
import {
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
  flex: require("../assets/flexbox_flex.png")
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

const H1 = ({ children }) => (
  <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
    {children}
  </Heading>
);

const H2 = ({ children }) => (
  <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
    {children}
  </Heading>
);

const H4 = ({ children }) => (
  <Heading size={4} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
    {children}
  </Heading>
);

const Code = ({ lang = "jsx", source }) => (
  <CodePane style={{ fontSize: 18, marginBottom: 30 }} lang={lang} source={source}/>
);

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
            <H1>React</H1>
          </Slide>

          <Slide>
            <H2>{"<JSX />"}</H2>
          </Slide>

          <Slide>
            <H4>Templates</H4>

            <Code source={require("raw!../assets/snippets/jsx")} />
          </Slide>

          <Slide>
            <H4>Expressions</H4>

            <Code source={require("raw!../assets/snippets/jsx-expressions")} />
          </Slide>

          <Slide>
            <H4>Conditional rendering</H4>

            <Code source={require("raw!../assets/snippets/jsx-is-code")} />
          </Slide>

          <Slide>
            <H4>Lists and keys</H4>

            <Code source={require("raw!../assets/snippets/jsx-lists-and-keys")} />
          </Slide>

          <Slide>
            <H2>Components</H2>

            <List>
              <ListItem>React.createClass({})</ListItem>
              <ListItem>Stateless component</ListItem>
              <ListItem>class x extends React.Component</ListItem>
            </List>
          </Slide>

          <Slide>
            <H2>Components</H2>
            <H4>Stateless</H4>

            <Code source={require("raw!../assets/snippets/components-stateless")} />
          </Slide>

          <Slide>
            <H2>Components</H2>
            <H4>Stateless</H4>

            <Code source={require("raw!../assets/snippets/components-stateless-better")} />
          </Slide>

          <Slide>
            <H2>Components</H2>
            <H4>Class</H4>

            <Code source={require("raw!../assets/snippets/components-class")} />
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
            <H4>Event handling</H4>
          </Slide>

          <Slide notes="State + props, context as fallback, global js context, Redux, MobX, ...">
            <H4>No data management</H4>
          </Slide>

          <Slide notes="Essential for declarative nature + performance, ideal for RN abstraction">
            <H4>Virtual DOM</H4>
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
            <H1>React Native</H1>
          </Slide>

          <Slide>
            <H2>Native</H2>

            <List>
              <ListItem>JS abstraction on top of Obj.C / Java</ListItem>
              <ListItem>Better development experience</ListItem>
              <ListItem>Native so fallback possible</ListItem>
            </List>
          </Slide>

          <Slide>
            <H4>Virtual ...</H4>

            <Text>
              virtual dom => virtual components
            </Text>
          </Slide>

          <Slide>
            <H4>React Native</H4>

            <Text>
              jsx => xml to native components
            </Text>

            <Code source={require("raw!../assets/snippets/jsx-native-elements")} />
          </Slide>

          <Slide
            notes={`
            dasherized properties become camelCased
            `}
          >
            <H2>Styling</H2>

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
            <H2>Flexbox</H2>

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
            <H2>Flexbox</H2>
            <H4>Flex</H4>

            <Code source={require("raw!../assets/snippets/flexbox_flex")} />
          </Slide>

          <Slide>
            <H2>Flexbox</H2>
            <H4>Flex</H4>

            <Image src={images.flex} height={300}/>
          </Slide>

          <Slide>
            <H2>Networking</H2>

            <List>
              <ListItem>fetch</ListItem>
              <ListItem>xmlHttpRequest</ListItem>
              <ListItem>websockets</ListItem>
            </List>
          </Slide>

          <Slide>
            <H2>Platform specific</H2>
            <H4>Inline ternary</H4>

            <Code source="Platform.OS === 'android' ? 'android text' : 'ios text'" />
          </Slide>

          <Slide>
            <H2>Platform specific</H2>
            <H4>Extension based</H4>

            <Code source="import Component from './Component'" />
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
            <H2>Debugging</H2>

            <List>
              <ListItem>(Auto) Reloading</ListItem>
              <ListItem>Redbox/Yellowbox</ListItem>
              <ListItem>Chrome dev tools</ListItem>
            </List>
          </Slide>

          <Slide>
            <H2>Thinking in React</H2>

            <List>
              <ListItem>Step 1: UI to component hierarchy</ListItem>
              <ListItem>Step 2: Build A Static Version</ListItem>
              <ListItem>Step 3: Identify the UI state</ListItem>
              <ListItem>Step 4: Identify the place for your state</ListItem>
              <ListItem>Step 5: Add Inverse Data Flow</ListItem>
            </List>
          </Slide>

          <Slide>
            <H1>Workshop 1</H1>
          </Slide>

          <Slide>
            <H2>Todo app</H2>
            <H4>1. Setup</H4>
          </Slide>

          <Slide notes="Goal: iOS todo app clone, failed, switch is more native, good excercise for styles/state/touch handling">
            <H2>Todo app</H2>
            <H4>2. Checkbox</H4>
          </Slide>

          <Slide>
            <H2>Todo app</H2>
            <H4>3. TodoItem view</H4>
          </Slide>

          <Slide>
            <H2>Todo app</H2>
            <H4>4. TodoItem edit view</H4>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
