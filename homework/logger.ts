export default function log(tag: string, ...message) {
  console.log(`${tag} \\\\`, ...message);
}
