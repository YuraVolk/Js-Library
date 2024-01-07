import React from "react";
import { CustomSelect } from "../../../components/custom-select/CustomSelect";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Custom Select</h1>
			<p>
				The custom select component represents a styled select element. Since normally select element cannot be styled across all browsers
				in the same way, it may be required to use a React solution to achieve single design. This select works through hiding original
				select component and substituting it with other components that under the hood change the select's values. This component accepts
				the following configuration properties to mimic the behavior of normal select and sync with a real hidden select:
			</p>
			<ul>
				<li>
					items: an array of SelectInternalItem interfaces, with the interface containing the following values:
					<ul>
						<li>value: a string value that is an attribute for the value of the select item.</li>
						<li>innerContent: a string value that is the inner content for select item.</li>
						<li>isDisabled: a boolean value to check whether element is disabled.</li>
						<li>isSelected: a boolean value to check whether element is selected.</li>
					</ul>
				</li>
				<li>selectName: a prop to give a name to the real hidden select element.</li>
			</ul>
			<CustomSelect
				items={[
					{
						value: "test1",
						innerContent: "Test to select...",
						isDisabled: false,
						isSelected: true
					},
					{
						value: "test2",
						innerContent: "Test 2",
						isDisabled: false,
						isSelected: true
					},
					{
						value: "test3",
						innerContent: "Test 3",
						isDisabled: false,
						isSelected: true
					},
					{
						value: "test4",
						innerContent: "Test 4",
						isDisabled: false,
						isSelected: true
					},
					{
						value: "test5",
						innerContent: "Test 5",
						isDisabled: false,
						isSelected: true
					},
					{
						value: "test6",
						innerContent: "Test 6",
						isDisabled: false,
						isSelected: true
					}
				]}
				selectName="select"
			/>
			<p>
				Through the exposed styles, you can easily customize the select appearance, and easily detect changes in the select through the
				onChange callback, thus making it both easy to style and use in your application.
			</p>
		</main>
	);
};

export default Page;
