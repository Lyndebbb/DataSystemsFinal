<?php
header("Content-Type: application/json");

$host = "localhost";
$userid = "lckim_lckim_fashion";
$userpw = "TeamFashion1!";
$db = "lckim_fashion_impact";

$mysql = new mysqli($host, $userid, $userpw, $db);

if ($mysql->connect_errno) {
    echo json_encode(["error" => $mysql->connect_error]);
    exit();
}

$query = "
    SELECT 
        brand_name,
        carbon_per_dollar,
        water_per_dollar,
        waste_per_dollar
    FROM impact_per_dollar
";

$result = $mysql->query($query);

$data = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $row["carbon_per_dollar"] = (float)$row["carbon_per_dollar"];
        $row["water_per_dollar"] = (float)$row["water_per_dollar"];
        $row["waste_per_dollar"] = (float)$row["waste_per_dollar"];
        $data[] = $row;
    }
}

echo json_encode($data, JSON_PRETTY_PRINT);
?>
