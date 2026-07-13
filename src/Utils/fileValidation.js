export function validateResume(file) {
  if (!file) {
    return "Please select a resume.";
  }

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(file.type)) {
    return "Only PDF and DOCX files are allowed.";
  }

  const maxSize = 5 * 1024 * 1024;

  if (file.size > maxSize) {
    return "File size should be less than 5 MB.";
  }

  if (file.size === 0) {
    return "The selected file is empty.";
  }

  return null;
}