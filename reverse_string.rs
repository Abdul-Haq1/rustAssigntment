fn reverse_string(input: &str) -> String {
    let mut chars: Vec<char> = input.chars().collect();
    chars.reverse();
    chars.into_iter().collect()
}

fn main() {
    let input = "hello";
    let reversed = reverse_string(input);
    println!("{}", reversed); // Output: "olleh"
}
