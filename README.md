<div align="left">
    <img src="health-profile.png" width="40%" align="left" style="margin-right: 15px"/>
    <div style="display: inline-block;">
        <h2 style="display: inline-block; vertical-align: middle; margin-top: 0;">HEALTH-PROFILE</h2>
        <p>
	<em>Empowering health decisions through personalized risk insights.</em>
</p>
        <p>
	<img src="https://img.shields.io/github/license/SrParavel/health-profile?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/SrParavel/health-profile?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/SrParavel/health-profile?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/SrParavel/health-profile?style=flat&color=0080ff" alt="repo-language-count">
</p>
        <p>Built with the tools and technologies:</p>
        <p>
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
</p>
    </div>
</div>
<br clear="left"/>

## Table of Contents

I. [ Overview](#-overview)
II. [ Features](#-features)
III. [ Project Structure](#-project-structure)
IV. [ Getting Started](#-getting-started)
V. [ Project Roadmap](#-project-roadmap)
VI. [ Contributing](#-contributing)
VII. [ License](#-license)
VIII. [ Acknowledgments](#-acknowledgments)

---

## Overview

The "health-profile" project is a user-friendly application designed to assess individual health risks and provide personalized recommendations. By guiding users through a series of structured questions about their health and lifestyle, it generates detailed health reports with insights and preventive measures. Ideal for individuals seeking proactive health management and tailored wellness guidance.

---

## Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                                                                               |
| :-- | :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Configures **Astro** project with **React** and **Tailwind CSS** via **Vite**</li><li>Defines project configuration settings for efficient tool integration</li><li>Manages dependencies and version consistency using `risk-app/package-lock.json`</li><li>Utilizes **TypeScript** for strict type checking and JSX support</li></ul>        |
| 🔩  | **Code Quality**  | <ul><li>Defines structured interfaces for form data and user input</li><li>Encapsulates UI logic in reusable components like **Card** and **Button**</li><li>Implements **React hooks** for dynamic content updates</li><li>Manages global styles and layout consistency across pages</li></ul>                                                       |
| 📄  | **Documentation** | <ul><li>Primary language: **TypeScript**</li><li>Extensive use of **TypeScript** and **JSON** for configuration and data handling</li><li>Package managers: **npm** and **pip** for dependency management</li><li>Includes usage and test commands for **npm** and **pip**</li></ul>                                                                  |
| 🔌  | **Integrations**  | <ul><li>FastAPI endpoint in `risk-api/main.py` for real-time risk prediction</li><li>Utilizes **Docker** for containerized deployment with `risk-api/dockerfile`</li><li>Generates health reports using **OpenAI's GPT-4.1-mini model** in `risk-api/reporter.py`</li><li>Facilitates data encoding and model training in Jupyter notebooks</li></ul> |
| 🧩  |  **Modularity**   | <ul><li>Organizes form steps and fields for structured user interaction</li><li>Encapsulates logic in components like **FormNav** and **FormHeader**</li><li>Separates concerns with distinct files for layouts, components, and utilities</li><li>Defines hyperparameters in `risk-mod/hyperparameters.json` for model training</li></ul>            |
| 🧪  |    **Testing**    | <ul><li>Facilitates heart attack risk prediction testing with `risk-api/test.http`</li><li>Ensures data consistency and processing accuracy in test components</li><li>Generates structured test response data in `risk-app/src/utils/test_response.json`</li><li>Includes usage commands for testing with **npm** and **pip**</li></ul>              |
| ⚡️ |  **Performance**  | <ul><li>Optimizes project performance with **React** and **Tailwind CSS** integration</li><li>Utilizes **Vite** for fast development and building tasks</li><li>Enhances user experience with smooth transitions and loading indicators</li><li>Generates formatted date strings efficiently using **React hooks**</li></ul>                          |

---

## Project Structure

```sh
└── health-profile/
    ├── README.md
    ├── risk-api
    │   ├── __pycache__
    │   │   ├── main.cpython-312.pyc
    │   │   └── reporter.cpython-312.pyc
    │   ├── dockerfile
    │   ├── main.py
    │   ├── model
    │   │   ├── columnas_categoricas.json
    │   │   ├── columnas_entradas.json
    │   │   └── modelo_entrenado.pkl
    │   ├── reporter.py
    │   ├── requirements.txt
    │   ├── test.http
    │   └── utils
    │       └── predictor.py
    ├── risk-app
    │   ├── README.md
    │   ├── astro.config.mjs
    │   ├── bun.lock
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   │   ├── Logo.png
    │   │   ├── checkicon.svg
    │   │   ├── doctor.png
    │   │   └── favicon.svg
    │   ├── src
    │   │   ├── components
    │   │   │   ├── Card.tsx
    │   │   │   ├── Doctor.tsx
    │   │   │   ├── Form.tsx
    │   │   │   ├── Loader.tsx
    │   │   │   ├── Logo.tsx
    │   │   │   ├── ReportComponent.tsx
    │   │   │   ├── TestComponent.tsx
    │   │   │   ├── Typewriter.tsx
    │   │   │   ├── form
    │   │   │   │   ├── Button.tsx
    │   │   │   │   ├── Label.tsx
    │   │   │   │   ├── NumberField.tsx
    │   │   │   │   ├── RadioGroup.tsx
    │   │   │   │   ├── SelectField.tsx
    │   │   │   │   └── ToggleField.tsx
    │   │   │   └── steps
    │   │   │       ├── CardiovascularHistory.tsx
    │   │   │       ├── FormFooter.tsx
    │   │   │       ├── FormHeader.tsx
    │   │   │       ├── FormNav.tsx
    │   │   │       ├── HealthCondition.tsx
    │   │   │       ├── Lifestyle.tsx
    │   │   │       ├── PersonalInformation.tsx
    │   │   │       ├── PhysicalCapabilities.tsx
    │   │   │       └── Prevention.tsx
    │   │   ├── config
    │   │   │   ├── fields.ts
    │   │   │   └── steps.ts
    │   │   ├── hooks
    │   │   │   └── UseFormattedDate.ts
    │   │   ├── layouts
    │   │   │   └── Layout.astro
    │   │   ├── pages
    │   │   │   ├── index.astro
    │   │   │   ├── report.astro
    │   │   │   └── testing.astro
    │   │   ├── styles
    │   │   │   ├── forms.css
    │   │   │   └── global.css
    │   │   ├── types
    │   │   │   ├── FormStep.ts
    │   │   │   ├── StepProps.ts
    │   │   │   ├── fields.ts
    │   │   │   └── formData.ts
    │   │   └── utils
    │   │       └── test_response.json
    │   ├── tailwind.config.js
    │   └── tsconfig.json
    └── risk-mod
        ├── encoding.ipynb
        ├── graphs
        │   ├── agecategory.png
        │   ├── bmi.png
        │   ├── generalhealth.png
        │   ├── hadangina.png
        │   ├── removedteeth.png
        │   ├── sleephours.png
        │   └── smokerstatus.png
        ├── heart_2022.csv
        ├── heart_2022_encoded.csv
        ├── hyperparameters.json
        ├── requirements.txt
        └── training.ipynb
```

### Project Index

<details open>
	<summary><b><code>HEALTH-PROFILE/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- risk-app Submodule -->
		<summary><b>risk-app</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/astro.config.mjs'>astro.config.mjs</a></b></td>
				<td>- Configures Astro project to integrate React and Tailwind CSS via Vite, enhancing the development environment and enabling seamless usage of these technologies within the project<br>- This file plays a crucial role in defining the project's configuration settings, ensuring efficient integration and utilization of the specified tools.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/package-lock.json'>package-lock.json</a></b></td>
				<td>- The code file provided in `risk-app/package-lock.json` is crucial for managing dependencies and ensuring version consistency within the "health-profile" project<br>- It plays a key role in specifying the required packages and their versions, contributing to the overall stability and functionality of the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Configures TypeScript settings for strict type checking and JSX support, extending a predefined configuration<br>- Includes type definitions and all files except 'dist'<br>- Configured to use React JSX syntax and import source.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>Configure Tailwind CSS to process specific file types and disable the use of OKLCH colors in the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/package.json'>package.json</a></b></td>
				<td>- The `risk-app/package.json` file manages dependencies and scripts for the project<br>- It orchestrates development, building, and previewing tasks using Astro, React, Tailwind CSS, and other libraries<br>- This file plays a crucial role in setting up the project environment and facilitating seamless development workflows.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<details>
						<summary><b>types</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/types/formData.ts'>formData.ts</a></b></td>
								<td>- Define the structure for form data fields, including binary, numeric, and categorical values<br>- Set default values for each field in the form<br>- This interface establishes a standardized format for capturing user input related to health and lifestyle information within the project's architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/types/fields.ts'>fields.ts</a></b></td>
								<td>Define field types for risk assessment data: Binary, Numeric, and Categorical, each with specific properties.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/types/StepProps.ts'>StepProps.ts</a></b></td>
								<td>Defines the structure for handling form data and user input in the risk assessment application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/types/FormStep.ts'>FormStep.ts</a></b></td>
								<td>- Defines a structured interface for form steps within the project, specifying title, description, context, fields, and icon<br>- This code file plays a crucial role in organizing and standardizing the information displayed in each step of the form, ensuring consistency and clarity throughout the user interaction flow.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>layouts</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/layouts/Layout.astro'>Layout.astro</a></b></td>
								<td>- Define the global layout styling and structure for the project, ensuring a consistent look and feel across all pages<br>- Import necessary styles and fonts, set metadata, and define the basic HTML structure<br>- This file serves as the foundation for rendering content within a standardized layout, enhancing user experience and maintaining visual coherence throughout the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>styles</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/styles/forms.css'>forms.css</a></b></td>
								<td>- Define consistent styles for form elements and actions across the project, enhancing user experience and visual coherence<br>- The CSS file centralizes design properties like shapes, colors, and text styles, ensuring a unified look and feel throughout the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/styles/global.css'>global.css</a></b></td>
								<td>- Define global styles for the project, including font and grid layout configurations<br>- Import Tailwind CSS for styling consistency<br>- Implement animations for fading effects<br>- Hide elements when exporting to PDF.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>config</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/config/fields.ts'>fields.ts</a></b></td>
								<td>- Define binary, categorical, and numeric fields for health-related questions and data input<br>- These fields capture information on physical activities, health conditions, habits, demographics, and health metrics<br>- They play a crucial role in structuring and organizing user input within the risk assessment application, aiding in data collection and analysis for health-related insights.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/config/steps.ts'>steps.ts</a></b></td>
								<td>- Define form steps for collecting user health data, categorizing into Personal Information, Cardiovascular History, Lifestyle Factors, Physical Functioning, Health Conditions, and Preventive Care<br>- Each step includes specific fields and context to guide users through the health assessment process, enhancing personalization and preventive care recommendations.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/ReportComponent.tsx'>ReportComponent.tsx</a></b></td>
								<td>- Displays a health report fetched from session storage, providing key health metrics and recommendations<br>- The component renders the report's sections and details, ensuring a seamless user experience within the application's health monitoring feature.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/Logo.tsx'>Logo.tsx</a></b></td>
								<td>Defines the Logo component for the project, displaying a logo with a heart pulse icon and text indicating "Cardio Risk." The component is designed to be visually appealing and informative, contributing to the overall user interface and branding of the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/Loader.tsx'>Loader.tsx</a></b></td>
								<td>Implements a loader component using LuLoaderCircle from react-icons/lu, enhancing the user experience by displaying a spinning animation while content loads.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/Form.tsx'>Form.tsx</a></b></td>
								<td>- Manages a multi-step form for collecting user data, displaying each step with relevant information and navigation options<br>- Handles form submission, data transformation, and API interaction for prediction<br>- Implements a smooth user experience with loading indicators and transitions between steps.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/Doctor.tsx'>Doctor.tsx</a></b></td>
								<td>- Defines a reusable Doctor component for displaying medical professionals in the UI<br>- It renders an image of a doctor alongside provided content, styled with specific classes for consistent appearance<br>- This component enhances the project's architecture by encapsulating doctor-related UI logic and promoting code reusability.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/TestComponent.tsx'>TestComponent.tsx</a></b></td>
								<td>- Generates a detailed cardiovascular health report for users, including risk statistics, general results, critical factors, observations, and recommendations<br>- Allows users to download the report as a PDF for informed decision-making<br>- Displays a personalized message and contact information for further assistance.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/Card.tsx'>Card.tsx</a></b></td>
								<td>- Defines a reusable Card component for displaying content with a shadow effect and rounded corners<br>- The component accepts children elements and additional styling properties<br>- It enhances the project's architecture by encapsulating card presentation logic, promoting code reusability, and maintaining a consistent UI design across the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/Typewriter.tsx'>Typewriter.tsx</a></b></td>
								<td>- Implements a Typewriter component that animates text display in a gradual manner<br>- The component accepts text input and an optional speed parameter to control the typing animation<br>- It leverages React hooks to manage the displayed text state and update it dynamically<br>- This component enhances user experience by creating a typewriter effect for text content.</td>
							</tr>
							</table>
							<details>
								<summary><b>form</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/form/NumberField.tsx'>NumberField.tsx</a></b></td>
										<td>- Defines a reusable NumberField component for rendering input fields with labels and units<br>- It enhances form usability by providing a structured layout for numeric inputs<br>- This component encapsulates input handling logic and styling, promoting consistency across the application's form components.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/form/Button.tsx'>Button.tsx</a></b></td>
										<td>- The Button component in the risk-app project renders a customizable button with primary or secondary styling<br>- It encapsulates button behavior and appearance, enhancing reusability and consistency across the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/form/SelectField.tsx'>SelectField.tsx</a></b></td>
										<td>- Enables rendering a select field with a label and categorical options<br>- The component enhances user interaction by allowing selection from a list of options<br>- This contributes to a seamless form input experience within the project's architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/form/Label.tsx'>Label.tsx</a></b></td>
										<td>Defines a reusable React component for labels with customizable styling and attributes, enhancing form elements in the project's architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/form/ToggleField.tsx'>ToggleField.tsx</a></b></td>
										<td>- ToggleField component renders a customizable toggle input with a label and description<br>- It leverages the Label component and React icons for styling<br>- The component encapsulates the logic for handling the toggle state and appearance based on user interaction.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/form/RadioGroup.tsx'>RadioGroup.tsx</a></b></td>
										<td>- RadioGroup component renders a group of radio buttons with a specified label and options<br>- It enhances user interaction by allowing selection from a list of categorical options<br>- This component plays a crucial role in the form section of the project, facilitating user input and data submission.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>steps</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/FormNav.tsx'>FormNav.tsx</a></b></td>
										<td>- FormNav component renders a navigation bar for form steps, allowing users to track progress and navigate between steps easily<br>- It dynamically styles each step based on completion status, providing a seamless user experience within the form flow.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/FormHeader.tsx'>FormHeader.tsx</a></b></td>
										<td>- FormHeader component renders a header for each step in a multi-step form, displaying step information and titles<br>- It enhances the user experience by providing clear navigation cues and context within the form.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/Lifestyle.tsx'>Lifestyle.tsx</a></b></td>
										<td>- Defines lifestyle-related form fields for a step in the risk assessment app<br>- Handles user input for alcohol consumption, smoking habits, sleep duration, and mental health status<br>- Utilizes toggle, select, and number input fields to capture relevant data<br>- Contributes to the user journey by gathering crucial lifestyle information for risk evaluation.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/CardiovascularHistory.tsx'>CardiovascularHistory.tsx</a></b></td>
										<td>- Implements a component for capturing cardiovascular history data in the risk assessment application<br>- It renders toggle and select fields for indicating angina, stroke, and diabetes history<br>- The component is designed to handle user input and update the form data accordingly.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/HealthCondition.tsx'>HealthCondition.tsx</a></b></td>
										<td>- Defines a component for managing health conditions in the risk assessment form<br>- Handles toggling various health conditions like asthma, COPD, kidney disease, and arthritis<br>- Utilizes SelectField and ToggleField components for user interaction<br>- Facilitates updating form data based on user input.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/Prevention.tsx'>Prevention.tsx</a></b></td>
										<td>- Implements a component for handling prevention-related data input in the project's form system<br>- It renders select fields for various prevention-related questions and allows users to update their responses<br>- This component plays a crucial role in capturing essential prevention data within the application's workflow.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/PhysicalCapabilities.tsx'>PhysicalCapabilities.tsx</a></b></td>
										<td>- Enables user input for physical capabilities in the risk assessment form, handling activities, walking difficulties, and health days<br>- Integrates with form components and config fields for seamless data management.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/PersonalInformation.tsx'>PersonalInformation.tsx</a></b></td>
										<td>- Enables users to input personal information such as sex, age category, race/ethnicity, and general health status<br>- Facilitates data entry through select fields and a BMI number field<br>- Supports seamless handling of form data changes.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/components/steps/FormFooter.tsx'>FormFooter.tsx</a></b></td>
										<td>- FormFooter component renders navigation buttons for a multi-step form, enabling users to move forward or backward within the form<br>- It dynamically adjusts button visibility based on the current step and loading state, providing a seamless user experience.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>hooks</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/hooks/UseFormattedDate.ts'>UseFormattedDate.ts</a></b></td>
								<td>Generates a formatted date string for display in the risk application by leveraging React's useMemo hook.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/pages/index.astro'>index.astro</a></b></td>
								<td>Integrates a form component into the main layout of the risk management application, facilitating user interaction with client data.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/pages/testing.astro'>testing.astro</a></b></td>
								<td>Facilitates rendering of a test component within the layout, enhancing the user interface of the testing page.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/pages/report.astro'>report.astro</a></b></td>
								<td>Facilitates rendering the ReportComponent within the Layout, enhancing the user interface of the risk management application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-app/src/utils/test_response.json'>test_response.json</a></b></td>
								<td>- The code file in risk-app/src/utils/test_response.json provides structured data for risk assessment reports, including probabilities, general health insights, critical observations, positive feedback, and personalized recommendations<br>- It plays a crucial role in generating comprehensive health risk assessments based on user input, guiding individuals towards healthier lifestyle choices and preventive measures.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- risk-mod Submodule -->
		<summary><b>risk-mod</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-mod/encoding.ipynb'>encoding.ipynb</a></b></td>
				<td>- The `encoding.ipynb` file in the `risk-mod` directory of the project serves the purpose of implementing data encoding techniques<br>- This code file is crucial for transforming and encoding data to ensure efficient processing and analysis within the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-mod/training.ipynb'>training.ipynb</a></b></td>
				<td>- The code file "training.ipynb" in the "risk-mod" directory is crucial for training machine learning models to predict and mitigate risks within the project<br>- It plays a key role in analyzing data, building models, and improving risk assessment strategies<br>- This file is essential for enhancing the project's overall architecture by enabling accurate risk predictions and informed decision-making.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-mod/requirements.txt'>requirements.txt</a></b></td>
				<td>- Manages project dependencies for the risk-mod module, ensuring compatibility and stability across various libraries and tools<br>- This file specifies the required versions of external packages essential for risk-mod's functionality within the broader project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-mod/hyperparameters.json'>hyperparameters.json</a></b></td>
				<td>Define hyperparameters for risk-mod model training.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- risk-api Submodule -->
		<summary><b>risk-api</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/main.py'>main.py</a></b></td>
				<td>- The code in risk-api/main.py serves as a FastAPI endpoint for predicting heart disease risk based on user input<br>- It loads a pre-trained model, processes input data, and returns the risk probability along with a health report<br>- This endpoint enhances the project's functionality by providing real-time risk assessment for users.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/dockerfile'>dockerfile</a></b></td>
				<td>- Facilitates building and running the risk-api service within a Docker container<br>- Sets up the necessary environment, installs dependencies, and configures the service to run on port 8000 using Uvicorn<br>- This Dockerfile streamlines the deployment process for the risk-api service in the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/requirements.txt'>requirements.txt</a></b></td>
				<td>- Facilitates dependency management by specifying required packages and versions in the project<br>- This file ensures compatibility and stability across the codebase by listing essential libraries and their versions for seamless integration and execution.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/test.http'>test.http</a></b></td>
				<td>- Facilitates heart attack risk prediction by sending a POST request with specific health data to the server<br>- The test is designed to evaluate the likelihood of a heart attack based on various health factors provided in the request payload.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/reporter.py'>reporter.py</a></b></td>
				<td>- Generate custom health reports for patients based on provided data and risk probability using OpenAI's GPT-4.1-mini model<br>- The function leverages natural language processing to create empathetic and professional reports in JSON format, enhancing the healthcare service provided by the system.</td>
			</tr>
			</table>
			<details>
				<summary><b>model</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/model/columnas_categoricas.json'>columnas_categoricas.json</a></b></td>
						<td>Defines categorical columns for risk assessment in the project's data model.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/model/columnas_entradas.json'>columnas_entradas.json</a></b></td>
						<td>Define input columns for risk assessment based on health and lifestyle factors.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/SrParavel/health-profile/blob/master/risk-api/utils/predictor.py'>predictor.py</a></b></td>
						<td>- Predicts heart attack risk for an individual using a specified model and input data<br>- Reorganizes input data, ensures correct columns, and converts categorical columns<br>- Returns the prediction and probability of a heart attack.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with health-profile, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm, Pip

### Installation

Install health-profile using one of the following methods:

**Build from source:**

1. Clone the health-profile repository:

```sh
❯ git clone https://github.com/SrParavel/health-profile
```

2. Navigate to the project directory:

```sh
❯ cd health-profile
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-INSTALL-COMMAND-HERE'
```

### Usage

Run health-profile using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-RUN-COMMAND-HERE'
```

### Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-TEST-COMMAND-HERE'
```

---

## Project Roadmap

- [x] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/SrParavel/health-profile/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/SrParavel/health-profile/issues)**: Submit bugs found or log feature requests for the `health-profile` project.
- **💡 [Submit Pull Requests](https://github.com/SrParavel/health-profile/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/SrParavel/health-profile
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/SrParavel/health-profile/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=SrParavel/health-profile">
   </a>
</p>
</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
