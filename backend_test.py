import requests
import sys
from datetime import datetime
import json

class AppsInnovationAPITester:
    def __init__(self, base_url="https://mobile-app-startup.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")

            self.test_results.append({
                "name": name,
                "success": success,
                "status_code": response.status_code,
                "expected_status": expected_status,
                "response": response.text[:200] if response.text else ""
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "310 1234567",
            "message": "This is a test message from automated testing."
        }
        
        return self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_contact_form_validation(self):
        """Test contact form validation with missing required fields"""
        test_data = {
            "name": "",  # Missing required field
            "email": "invalid-email",  # Invalid email
            "message": ""  # Missing required field
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "contact",
            422,  # Expecting validation error
            data=test_data
        )
        return success

    def test_get_contact_messages(self):
        """Test getting contact messages"""
        return self.run_test(
            "Get Contact Messages",
            "GET",
            "contact",
            200
        )

def main():
    print("🚀 Starting Apps Innovation SAS API Testing")
    print("=" * 50)
    
    # Setup
    tester = AppsInnovationAPITester()
    
    # Run tests
    print("\n📡 Testing API connectivity...")
    tester.test_api_root()
    
    print("\n📝 Testing contact form functionality...")
    tester.test_contact_form_submission()
    tester.test_contact_form_validation()
    tester.test_get_contact_messages()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed. Check the details above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())