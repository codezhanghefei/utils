export default function isNull(str: string | null | undefined ) {
  if (str === '' || str === null || str === undefined) return true;
  var reg = '^[ ]+$';
  var re = new RegExp(reg);
  return re.test(str);
}