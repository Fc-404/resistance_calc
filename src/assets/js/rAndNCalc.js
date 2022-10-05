/**
 * This is the algorithm that be used to calculate 
 * programme of resistance combination.
 * @param {Resistance as We need} need 
 * @param {Resistance as We have} have 
 * @param {Results after calculate} results 
 * @param {Error of the need and the result} error 
 * @returns {
 *  count: Number,
 *  results: [
 *    {
 *      sum: Number,
 *      rArr: [
 *        {
 *          sum: Number,
 *          rArr: [
 *            Number
 *          ],
 *        },
 *      ],
 *    }
 *  ]
 * }
 * And the 'need' is number type,
 * and the 'have' is type of Object that is Array,
 * which follow format as [resistance: string, resistance: number, count: number, valid: boolean]
 */

export default function (need, have, results, error = 1) {
  let resistances = []

  // Filter out valid resistance to Array
  for (let i of have)
    if (i[3]) resistances.push(i)

  if (!resistances.length)
    return null


}