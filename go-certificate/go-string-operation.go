import (
    "log"
    "regexp"
)

func reverse(str string) (result string) {
    for _, v := range str {
        result = string(v) + result
    }
    return
}
func ModifyString(str string) string {
    reg, err := regexp.Compile("[^a-zA-Z]+")
    if err != nil {
        log.Fatal(err)
    }
    processedStr := reg.ReplaceAllString(str, "")
    return reverse(processedStr)
}
