import {readFileSync} from 'node:fs'
export function readInput(folder: string): string {
	return readFileSync(`../${folder}/input.txt`, 'utf8')
}