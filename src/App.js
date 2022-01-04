import { useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import References from "./components/References";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import { allContentES, allContentEN } from "./Content/Data.jsx";

function App() {
	const [allContent, setAllContent] = useState(allContentES);
	return (
		<>
			<Header
				allContent={allContent}
				setAllContent={setAllContent}
				allContentES={allContentES}
				allContentEN={allContentEN}
			/>
			<Timeline allContent={allContent} />
			<Languages allContent={allContent} />
			<Skills allContent={allContent} />
			<References allContent={allContent} />
			<Portfolio allContent={allContent} />
			<ContactMe allContent={allContent} />
		</>
	);
}

export default App;
