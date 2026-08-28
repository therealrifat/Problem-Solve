// টাস্ক: অ্যারেলের ভেতর অ্যারে (Nested Array) থাকলে সেগুলোকে ভেঙে একটি সিঙ্গেল ফ্ল্যাট অ্যারেইতে রূপান্তর করতে হবে। (বিল্ট-ইন .flat() ব্যবহার করা যাবে না)।

// ব্রেকডাউন:


// // ইনপুট:
// flattenArray([1, [2, [3, 4], 5], 6]);

// // আউটপুট:
// // [1, 2, 3, 4, 5, 6]



function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    // ১. চেক করা হচ্ছে উপাদানটি কি একটি অ্যারে?
    if (Array.isArray(item)) {
      // উপাদানটি অ্যারে হলে রিকার্সিভলি আবার flattenArray কল করে ছড়িয়ে (spread) দেওয়া হচ্ছে
      return acc.concat(flattenArray(item));
    } else {
      // উপাদানটি সাধারণ সংখ্যা হলে সরাসরি একিউমুলেটরে যোগ করা হচ্ছে
      return acc.concat(item);
    }
  }, []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Output: [1, 2, 3, 4, 5, 6]
