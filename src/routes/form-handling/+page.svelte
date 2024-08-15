<script>
	const formValues = {
		name: '',
		description: '',
		interests: '',
		skills: [],
		worksRemotely: false,
		positions: [],
		ageRange: ''
	};

	const submitForm = (e) => {
		// e.preventDefault();
		console.log(formValues);
	};
</script>

<h1>Form Handling</h1>
<h2>Example 1</h2>

<section>
	<pre>
            {JSON.stringify(formValues, null, 2)}
        </pre>

	<form on:submit|preventDefault={submitForm}>
		<div>
			<label for="name">Name</label>
			<input bind:value={formValues.name} type="text" id="name" />
		</div>

		<div>
			<label for="description">Description</label>
			<textarea bind:value={formValues.description} name="" id="description" />
		</div>

		<div>
			<label for="interests">Hobbies</label>
			<select name="" id="interests" bind:value={formValues.interests}>
				<option value="">-- Pick a Hobby --</option>
				<option value="gaming">Games</option>
				<option value="swimming">Swimming</option>
				<option value="stumpin">Stumpin'</option>
			</select>
		</div>

		<div>
			<label for="skills">Skills</label>
			<select name="" id="skills" bind:value={formValues.skills} multiple>
				<option value="">-- Pick Your Skills --</option>
				<option value="html">HTML</option>
				<option value="css">CSS</option>
				<option value="javascript">JavaScript</option>
			</select>
		</div>

		<div>
			<input type="checkbox" name="" id="worksRemotely" bind:checked={formValues.worksRemotely} />
			<label for="worksRemotely">Do you work remotely?</label>
		</div>

		<div>
			<label>Positions</label>
			<input type="checkbox" id="ceo" value="ceo" bind:group={formValues.positions} />
			<label for="ceo">CEO</label>

			<input type="checkbox" id="dev" value="dev" bind:group={formValues.positions} />
			<label for="dev">Developer</label>

			<input type="checkbox" id="designer" value="designer" bind:group={formValues.positions} />
			<label for="designer">Designer</label>
		</div>

		<div>
			<label>Age Range</label>
			<input type="radio" id="18-30" value="18-30" bind:group={formValues.ageRange} />
			<label for="18-30">18-30</label>

			<input type="radio" id="31-49" value="31-49" bind:group={formValues.ageRange} />
			<label for="31-49">31-49</label>

			<input type="radio" id="50+" value="50+" bind:group={formValues.ageRange} />
			<label for="50+">50+</label>
		</div>

		<div>
			<button>Submit</button>
		</div>
	</form>
</section>

<style>
</style>
