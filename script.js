let inputs = document.querySelectorAll("input");

function handleChange() {
    let suffix = this.dataset.value || "";

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(e.target.name)
    // console.log(e.target.value);
    // console.log(e.target.dataset);
}

inputs.forEach(input => input.addEventListener('change', handleChange))

inputs.forEach(input => input.addEventListener('mousemove', handleChange))