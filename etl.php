<?php

$in = json_decode(file_get_contents('./data.json'), true);
$out = ['sites' => []];
$columns = $in['sites'][0];

foreach ($in['sites'] as $i => $row) {
	if ($i == 0) continue;
	$temp = [];
	foreach ($columns as $oldField => $newField) {
		$temp[$newField] = $row[$oldField];
	}
	$out['sites'][$temp['UWW Site ID']] = $temp;
}

file_put_contents('./import.json', json_encode($out));
