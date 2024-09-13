document.addEventListener("DOMContentLoaded", () => {
  const resumeForm = document.getElementById(
    "resumeForm"
  ) as HTMLFormElement | null;
  const resumeOutput = document.getElementById(
    "resumeOutput"
  ) as HTMLDivElement | null;
  const skillsSection = document.getElementById(
    "skillsSection"
  ) as HTMLElement | null;
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement | null;

  // Toggle skills section visibility
  if (toggleButton && skillsSection) {
    let isSkillsVisible: boolean = true;

    toggleButton.addEventListener("click", () => {
      isSkillsVisible = !isSkillsVisible;
      skillsSection.style.display = isSkillsVisible ? "block" : "none";
      toggleButton.textContent = isSkillsVisible
        ? "Hide Skills Section"
        : "Show Skills Section";
    });
  }

  // Form submission and resume generation
  resumeForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    )?.value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    )?.value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)
      ?.value;

    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <p><strong>Education:</strong> <span contenteditable="true">${education}</span></p>
        <p><strong>Experience:</strong> <span contenteditable="true">${experience}</span></p>
        <p><strong>Skills:</strong> <span contenteditable="true">${skills}</span></p>
      `;
    }
  });

  // Optionally, handle changes to contenteditable elements to persist changes
  document.addEventListener("input", (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.matches('#resumeOutput span[contenteditable="true"]')) {
      // Code to handle saving changes or any other necessary actions
      // For now, this just logs changes to the console
      console.log("Content changed:", target.innerHTML);
    }
  });
});
