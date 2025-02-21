import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants/index";

export default function Join() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Sign up to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your full name"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>

        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Confirm your password"
              secureTextEntry
            />
          </View>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Sign-Up */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or sign up with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText}>Sign in</Text>
      </View>
    </View>
  );
}
