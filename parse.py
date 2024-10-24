import csv
import json
import re
from functools import reduce


def unicode_csv_reader(utf8_data, **kwargs):
    csv_reader = csv.reader(utf8_data, dialect=csv.excel, **kwargs)
    for row in csv_reader:
        # No need to decode from utf-8, as strings are Unicode in Python 3.
        yield [cell for cell in row]


# countries and their subdivisions.
with open("data.csv", "r", encoding="utf-8") as csv_file:
    countries = {}
    for row in unicode_csv_reader(csv_file):
        country_name = row[0]
        subdivision_code = row[1]
        subdivision_name = re.sub(r"\[.*\]", "", row[2])
        type = row[3]
        country_code = row[4]
        if country_code not in countries:
            countries[country_code] = {"name": country_name.strip(), "sub": {}}
        countries[country_code]["sub"][subdivision_code] = {
            "name": subdivision_name.strip(),
            "type": type.strip()
        }

    subdivisions = reduce(
        lambda a, b: a + len(list(countries[b]["sub"].keys())), countries, 0
    )

    print("Countries: %d, Subdivisions: %d" % (
        len(countries), subdivisions
    ))

    with open("data.js", "w", encoding="utf-8") as json_file:
        print("Dumping subdivisions to data.js")
        json_file.write("var data = ")
        json.dump(countries, json_file, ensure_ascii=False)
        json_file.write(";")

# alpha-3 to alpha-2 country code conversions
with open("codes.csv", "r", encoding="utf-8") as csv_file:
    codes = {}
    for row in unicode_csv_reader(csv_file):
        alpha2 = row[0]
        alpha3 = row[1]
        codes[alpha3] = alpha2

    print("Country codes: %d" % len(codes))

    with open("data.js", "a", encoding="utf-8") as json_file:
        print("Dumping codes to data.js")
        json_file.write("var codes = ")
        json.dump(codes, json_file, ensure_ascii=False)
        json_file.write(";")
